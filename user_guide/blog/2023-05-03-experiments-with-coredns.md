---
slug: coredns-experiments
title: Our Experiments with CoreDNS
authors: amar
tags: [k8s, kubernetes, coredns]
---

CoreDNS is the default DNS server for Kubernetes since version 1.11, replacing kube-dns. It is a flexible, extensible DNS server that can also serve as a service discovery mechanism for your Kubernetes cluster. CoreDNS uses a modular architecture with a plugin-based system, which makes it highly customizable to meet various use cases.

CoreDNS in Kubernetes:

When you create a Kubernetes cluster, a CoreDNS instance is automatically deployed as a part of the control plane. This CoreDNS instance is responsible for providing name resolution for Kubernetes services, as well as Pods with custom DNS entries.

CoreDNS reads the Kubernetes API to find out the services and endpoints, allowing it to respond to DNS queries for service names in the form `<service_name>.<namespace>.svc.cluster.local`. It also provides reverse DNS records and supports DNS-based service discovery.

Here's an ASCII-based diagram that illustrates how CoreDNS interacts with various elements of Kubernetes and the external world:

```
+-------------+       +-------------+       +-----------------+
|             |       |             |       |                 |
|  Pod A      +------->  Service A  +------->  CoreDNS        |
|             |       |             |       | (Kubernetes     |
+-------------+       +-------------+       |  Plugin)        |
                                            |                 |
+-------------+       +-------------+       |                 |
|             |       |             |       |                 |
|  Pod B      +------->  Service B  +------->                 |
|             |       |             |       |                 |
+------+------+       +-------------+       +--------+--------+
       ^                                         |
       |                                         |
       |                                         v
+------+-------+                         +-------+-------+
|              |                         |               |
|  Kubernetes  |                         | External      |
|  API Server  |                         | DNS Resolver  |
|              |                         |               |
+--------------+                         +---------------+
```

In this diagram:

- `Pod A` and `Pod B` represent application pods running within the Kubernetes cluster.
- `Service A` and `Service B` represent Kubernetes services that provide load balancing and service discovery for the pods.
- `CoreDNS` is the DNS server for the cluster and uses the `kubernetes` plugin to discover services and endpoints.
- `Kubernetes API Server` is where CoreDNS gets the information about services and endpoints for service discovery.
- `External DNS Resolver` represents an external DNS server (e.g., Google DNS, Cloudflare, etc.) used by CoreDNS to resolve external domains when needed.



## CoreDNS Configuration

CoreDNS uses a configuration file called `Corefile` to define its behavior. The `Corefile` is composed of multiple stanzas, each of which represents a zone or a specific configuration. Each stanza starts with a domain name or a wildcard (*) followed by a series of plugins.

Here's an example `Corefile` for a simple Kubernetes setup:

```
.:53 {
    errors
    health {
        lameduck 5s
    }
    ready
    kubernetes cluster.local in-addr.arpa ip6.arpa {
        pods insecure
        fallthrough in-addr.arpa ip6.arpa
        ttl 30
    }
    prometheus :9153
    forward . /etc/resolv.conf {
        max_concurrent 1000
    }
    cache 30
    loop
    reload
    loadbalance
}
```

In this example, we define a single zone (.) that listens on port 53. The plugins used are:

1. `errors`: Logs error messages.
2. `health`: Provides an HTTP health check endpoint.
3. `ready`: Provides a readiness check endpoint.
4. `kubernetes`: Enables Kubernetes DNS-based service discovery.
5. `prometheus`: Exposes metrics for monitoring.
6. `forward`: Forwards DNS queries to external resolvers.
7. `cache`: Caches DNS responses.
8. `loop`: Detects and prevents forwarding loops.
9. `reload`: Automatically reloads the Corefile on changes.
10. `loadbalance`: Balances queries across multiple backend endpoints.

Customizing CoreDNS:

To modify CoreDNS behavior in a Kubernetes cluster, you can edit the ConfigMap associated with the CoreDNS deployment. Here's how you can do that:

1. Get the current CoreDNS ConfigMap:

```
kubectl get configmap coredns -n kube-system -o yaml > coredns-configmap.yaml
```

2. Edit the `coredns-configmap.yaml` file to modify the `Corefile` as needed.

3. Apply the updated ConfigMap:

```
kubectl apply -f coredns-configmap.yaml
```

4. CoreDNS will automatically reload its configuration. If it doesn't, you can restart the CoreDNS Pods to pick up the changes:

```
kubectl rollout restart -n kube-system deployment/coredns
```

By customizing the Corefile and leveraging the wide variety of plugins available, you can tailor CoreDNS to fit the specific needs of your Kubernetes cluster. To learn more about CoreDNS and its plugins, visit the official documentation: https://coredns.io/manual/toc

## Low hanging Performance Fruits

Here are a few simple CoreDNS hacks that can help improve DNS performance in Kubernetes:

1. Increase cache size and duration:

   The `cache` plugin in CoreDNS can help reduce the load on the DNS server and improve query response times by caching DNS responses. You can increase the cache size and cache duration to enhance performance:

   ```
   cache [TTL] [ZONESIZE]
   ```

   Example:

   ```
   cache 300 5000
   ```

   This configuration caches responses for up to 300 seconds and allows up to 5,000 items in the cache.

2. Utilize load balancing:

   The `loadbalance` plugin enables round-robin load balancing for A, AAAA, and MX records. This helps distribute the load across different endpoints and improves overall DNS performance.

   Add the `loadbalance` plugin in the `Corefile`:

   ```
   loadbalance
   ```

3. Adjust the number of concurrent requests:

   The `forward` plugin forwards DNS queries to external resolvers. You can adjust the maximum number of concurrent requests by using the `max_concurrent` option:

   ```
   forward . /etc/resolv.conf {
       max_concurrent 1000
   }
   ```

   Increase the `max_concurrent` value according to your cluster's capabilities and requirements.

4. Configure negative caching:

   Negative caching stores negative responses (NXDOMAIN) temporarily, reducing the number of queries made for non-existent records. The `cache` plugin can be used for negative caching by specifying the `denial` option:

   ```
   cache {
       success CAPACITY [TTL]
       denial CAPACITY [TTL]
   }
   ```

   Example:

   ```
   cache {
       success 5000 300
       denial 1000 60
   }
   ```

   This configuration caches successful responses for up to 300 seconds (5,000-item capacity) and negative responses for up to 60 seconds (1,000-item capacity).

5. Enable prefetching:

   The `prefetch` plugin prefetches popular records before they expire, ensuring the cache is always up to date. This can help reduce the number of cache misses and improve performance:

   ```
   prefetch [trigger] [eligible] [duration]
   ```

   Example:

   ```
   prefetch 10 20 1m
   ```

   This configuration prefetches a record if it is requested at least 10 times before its TTL expires, with a minimum of 20 seconds remaining. Prefetched records have their TTL reset to 1 minute.

Remember that these hacks can provide performance improvements, but you should always test and monitor the changes to ensure they work as expected in your specific environment. Adjust the parameters based on your cluster size, workloads, and requirements.

## Corefile

The Corefile is the primary configuration file for CoreDNS. It is a simple, human-readable text file that defines how CoreDNS should behave and which plugins it should use. The Corefile consists of one or more stanzas, each representing a configuration for a specific zone or a set of zones.

Each stanza starts with a domain name or a wildcard (*), followed by a list of plugins. Each plugin is responsible for a specific functionality or behavior. Plugins are executed in the order they are listed.

Here's a brief overview of a simple Corefile:

```
example.com:53 {
    plugin1
    plugin2
    ...
}
```

In this example, we define a zone for `example.com` and listen on port 53. The plugins `plugin1` and `plugin2` are used for this zone.

Example Use Cases:

1. Split-horizon DNS:

   Split-horizon DNS is a technique where different DNS records are returned based on the source IP address of the client. This can be useful for serving different records for internal and external clients.

   Corefile configuration:

   ```
   internal.example.com:53 {
       whoami
       acl {
           allow net 10.0.0.0/8
           block
       }
       file /etc/coredns/db.internal.example.com
   }

   external.example.com:53 {
       whoami
       acl {
           allow net 0.0.0.0/0
       }
       file /etc/coredns/db.external.example.com
   }
   ```

   In this configuration, we define two zones for `internal.example.com` and `external.example.com`. The `acl` plugin is used to filter clients based on their IP addresses. Internal clients from the 10.0.0.0/8 network can only access `internal.example.com`, while external clients can access `external.example.com`.

2. Custom DNS server with forwarding and caching:

   In this use case, we create a custom DNS server that caches responses, forwards external queries, and serves some local domains.

   Corefile configuration:

   ```
   local.example.com:53 {
       file /etc/coredns/db.local.example.com
       errors
       log
   }

   .:53 {
       errors
       health
       cache 300
       forward . 8.8.8.8 8.8.4.4 {
           max_concurrent 1000
       }
   }
   ```

   In this example, we define a zone for `local.example.com` and serve it from a local file. Another zone (.) acts as a catch-all for other queries, caching responses for 300 seconds and forwarding them to Google's DNS servers (8.8.8.8 and 8.8.4.4) with a maximum of 1000 concurrent requests.

3. CoreDNS with Prometheus monitoring:

   In this use case, we enable Prometheus monitoring for CoreDNS to collect metrics.

   Corefile configuration:

   ```
   .:53 {
       errors
       health
       kubernetes cluster.local in-addr.arpa ip6.arpa {
           pods insecure
           fallthrough in-addr.arpa ip6.arpa
       }
       prometheus :9153
       forward . /etc/resolv.conf
       cache 30
       loop
   }
   ```

   In this configuration, we define a zone (.) that listens on port 53. The `prometheus` plugin is enabled to expose metrics on port 9153.

These are just a few examples of what you can achieve using CoreDNS and its versatile Corefile configuration. The extensive list of available plugins allows for a wide range of use cases and customizations.