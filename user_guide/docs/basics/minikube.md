---
sidebar_position: 2
id: getting-started-minikube
slug: /basics/minikube
---

# Minikube

Minikube is a tool that allows you to run a single-node Kubernetes cluster on your local machine. It is designed for developers who want to test their applications locally before deploying them to a production environment. In this documentation, we will show you how to get started with running Kubernetes services on a MacBook using Minikube.

Prerequisites:

1. A MacBook running macOS.
2. A basic understanding of Kubernetes.

Step 1: Install Minikube

To install Minikube, follow these steps:

1. Open a terminal window.
2. Install Homebrew by running the following command:

   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. Install Minikube using Homebrew by running the following command:

   ```
   brew install minikube
   ```

4. Verify that Minikube is installed by running the following command:

   ```
   minikube version
   ```

   This command should display the version of Minikube that you just installed.

Step 2: Start Minikube

To start Minikube, follow these steps:

1. Open a terminal window.
2. Run the following command to start Minikube:

   ```
   minikube start
   ```

   This command will start the Minikube VM and create a single-node Kubernetes cluster.

3. Verify that Minikube is running by running the following command:

   ```
   kubectl cluster-info
   ```

   This command should display information about the Kubernetes cluster that Minikube just created.

Step 3: Deploy an application to the cluster

After your cluster is up and running, you can deploy your application to it. To deploy an application, follow these steps:

1. Create a Kubernetes deployment manifest file with the specifications of your application.
2. Apply the deployment manifest file to the cluster using the kubectl apply command. For example:

   ```
   kubectl apply -f deployment.yaml
   ```

   This command will create a deployment for your application based on the specifications in the deployment.yaml file.

3. Verify that the deployment was created successfully by running the following command:

   ```
   kubectl get deployments
   ```

   This command will list all the deployments in your cluster.

Step 4: Create a service for your application

After your application has been deployed, you can create a service to expose it within the cluster. To create a service, follow these steps:

1. Create a Kubernetes service manifest file with the specifications of your service.
2. Apply the service manifest file to the cluster using the kubectl apply command. For example:

   ```
   kubectl apply -f service.yaml
   ```

   This command will create a service for your application based on the specifications in the service.yaml file.

3. Verify that the service was created successfully by running the following command:

   ```
   kubectl get services
   ```

   This command will list all the services in your cluster.

Step 5: Access the service

To access the service, follow these steps:

1. Get the IP address of the Minikube VM by running the following command:

   ```
   minikube ip
   ```

2. Use the IP address to access the service in your web browser. For example:

   ```
   http://<minikube-ip>:<service-port>
   ```

   Replace `<minikube-ip>` with the IP address of the Minikube VM and `<service-port>` with the port number specified in the service manifest file.

Conclusion:

In this documentation, we have shown you how to get started with running Kubernetes services on a MacBook using Minikube. With these tools, you can develop and test your applications locally before deploying them to a production environment. Minikube provides a simple and easy way to create a Kubernetes cluster on your local machine, making it an ideal tool for developers who want to test their applications in a Kubernetes environment without the need for a full-fledged production cluster.

## Helm with Minikube

Using Helm charts with Minikube that includes services and ingress.

Prerequisites:

1. Minikube installed and running.
2. Helm installed.

Step 1: Create a new Helm chart

To create a new Helm chart, run the following command:

```
helm create mychart
```

This will create a new directory named "mychart" with the basic structure of a Helm chart.

Step 2: Add a service to the chart

To add a service to the chart, modify the "values.yaml" file in the "mychart" directory to include the following:

```
service:
  name: my-service
  port: 80
  targetPort: 8080
  type: NodePort
```

This will create a new service named "my-service" with port 80 that targets port 8080 on the pods. The type of the service is set to "NodePort", which means that the service will be accessible on a port on the host machine.

Step 3: Add an ingress to the chart

To add an ingress to the chart, modify the "values.yaml" file in the "mychart" directory to include the following:

```
ingress:
  enabled: true
  annotations:
    kubernetes.io/ingress.class: nginx
  hosts:
    - host: my-app.local
      paths:
        - path: /
          backend:
            serviceName: my-service
            servicePort: 80
```

This will create a new ingress that is enabled and has an annotation to specify the ingress controller to use. It will also create a rule that routes traffic to the "my-service" service when a request is made to "my-app.local".

Step 4: Install the chart

To install the chart, run the following command:

```
helm install mychart ./mychart
```

This will install the chart in the Kubernetes cluster created by Minikube.

Step 5: Verify the installation

To verify that the installation was successful, run the following commands:

```
kubectl get services
kubectl get ingress
```

This will display the list of services and ingress resources created by the chart. Note the external IP address of the ingress resource.

Step 6: Test the installation

To test the installation, open a web browser and navigate to the external IP address of the ingress resource, "my-app.local". You should see the default "Welcome to nginx!" page.

Conclusion:

In this example, we created a new Helm chart and added a service and an ingress to it. We then installed the chart in a Minikube cluster and tested the installation by accessing the ingress resource from a web browser. Helm provides an easy way to manage Kubernetes resources and simplifies the process of deploying applications in a Kubernetes environment.




To use a local Docker registry with Minikube, you can follow these steps:

1. Start Minikube:

   ```sh
   minikube start
   ```

2. Create a local Docker registry:

   ```sh
   docker run -d -p 5000:5000 --restart=always --name registry registry:2
   ```

   This will create a local Docker registry running on port 5000.

3. Configure Minikube to use the local Docker registry:

   ```sh
   minikube ssh -- sudo sh -c 'echo "192.168.99.100:5000    registry.local" >> /etc/hosts'
   ```

   This will add an entry to the Minikube virtual machine's `/etc/hosts` file to map `registry.local` to the IP address of the local Docker registry.

4. Enable Docker registry on Minikube:

   ```sh
   minikube addons enable registry
   ```

   This will enable the registry addon for Minikube and make the local Docker registry accessible from within the cluster.

5. Deploy an application using the local Docker registry:

   To deploy an application using the local Docker registry, you need to modify the image name of your Kubernetes deployment or pod to use the `registry.local` hostname instead of the public Docker Hub registry. For example:

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: my-app
   spec:
     replicas: 1
     selector:
       matchLabels:
         app: my-app
     template:
       metadata:
         labels:
           app: my-app
       spec:
         containers:
         - name: my-app
           image: registry.local/my-app:latest
           ports:
           - containerPort: 80
   ```

   This will deploy an application using the `my-app` image from the local Docker registry.

   Note: Make sure that the image is available in the local Docker registry before deploying the application. You can push an image to the local Docker registry using the following command:

   ```sh
   docker push registry.local/my-app:latest
   ```

## Mutating Controller

The MutatingWebhook admission controller is a feature of Kubernetes that allows you to modify incoming requests to the Kubernetes API server. It can be used to automatically inject sidecar containers, add default labels or annotations, or perform other types of customizations to Kubernetes objects.

To install the MutatingWebhook controller in Minikube, you can follow these steps:

1. Start a Minikube cluster:

   ```
   minikube start
   ```

2. Enable the MutatingWebhook admission controller in the kube-apiserver by adding the following flags to the kube-apiserver manifest file (`/etc/kubernetes/manifests/kube-apiserver.yaml`):

   ```
   - --enable-admission-plugins=NodeRestriction,MutatingAdmissionWebhook,ValidatingAdmissionWebhook
   - --runtime-config=admissionregistration.k8s.io/v1beta1=true
   ```

3. Create a self-signed certificate and private key for the webhook server:

   ```
   openssl req -newkey rsa:2048 -nodes -keyout webhook-key.pem -x509 -days 365 -out webhook-cert.pem -subj "/CN=mutating-webhook.default.svc"
   ```

   This will create a new self-signed certificate and private key in the current directory, valid for 365 days, and with the subject set to the DNS name `mutating-webhook.default.svc`.

4. Create a Kubernetes deployment and service for the webhook server:

   ```
   kubectl create deployment mutating-webhook --image=k8s.gcr.io/webhook:latest
   kubectl expose deployment mutating-webhook --port=443 --target-port=443 --name=mutating-webhook
   ```

5. Create a MutatingWebhookConfiguration resource to register the webhook server with the Kubernetes API server:

   ```
   cat <<EOF | kubectl apply -f -
   apiVersion: admissionregistration.k8s.io/v1beta1
   kind: MutatingWebhookConfiguration
   metadata:
     name: mutating-webhook
   webhooks:
   - name: mutating-webhook.example.com
     rules:
     - apiGroups: [""]
       apiVersions: ["v1"]
       operations: ["CREATE"]
       resources: ["pods"]
     failurePolicy: Fail
     clientConfig:
       service:
         name: mutating-webhook
         namespace: default
         path: "/mutate"
       caBundle: $(cat webhook-cert.pem | base64 | tr -d '\n')
   EOF
   ```

   This will create a new MutatingWebhookConfiguration resource that registers the webhook server with the Kubernetes API server. The webhook server will be invoked for any CREATE operation on Pods.

6. Verify that the webhook server is working by creating a new Pod:

   ```
   cat <<EOF | kubectl apply -f -
   apiVersion: v1
   kind: Pod
   metadata:
     name: test-pod
   spec:
     containers:
     - name: nginx
       image: nginx
   EOF
   ```

   This will create a new Pod called `test-pod` with an nginx container. The MutatingWebhook controller should automatically inject a sidecar container into the Pod.

7. Verify that the sidecar container was injected into the Pod:

   ```
   kubectl describe pod test-pod
   ```

   This should show that the Pod has two containers: the nginx container and the injected sidecar container.

That's it! You now have a MutatingWebhook controller running in Minikube, which can automatically modify incoming requests to the Kubernetes API server.