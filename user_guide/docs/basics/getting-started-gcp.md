---
sidebar_position: 1
id: getting-started-gcp
slug: /basics/getting-started-gcp
---

# Getting Started with GCP

Kubernetes, also known as K8s, is a popular open-source container orchestration platform. It is used to manage and deploy containerized applications at scale. Google Cloud Platform (GCP) is a cloud computing platform offered by Google that provides infrastructure services for hosting applications.

This documentation will guide you through setting up a Kubernetes cluster in GCP, deploying applications, creating services, and using ingress to expose those services to the internet.

Prerequisites:
1. A Google Cloud Platform account.
2. gcloud command-line tool installed.
3. A basic understanding of Kubernetes.

Step 1: Create a Kubernetes cluster in GCP

To create a Kubernetes cluster in GCP, follow these steps:
1. Open the GCP Console and select the project you want to use.
2. In the navigation menu, click on Kubernetes Engine and then click on Clusters.
3. Click on Create Cluster and configure the following settings:
   - Cluster name: Enter a name for your cluster.
   - Zone: Select the zone where you want your cluster to be located.
   - Number of nodes: Specify the number of nodes you want in your cluster.
   - Machine type: Select the machine type you want to use for your nodes.
4. Click on Create and wait for the cluster to be created.

Step 2: Deploy an application to the cluster

Once your cluster is up and running, you can deploy your application to it. To deploy an application, follow these steps:
1. Create a Kubernetes deployment manifest file with the specifications of your application.
2. Apply the deployment manifest file to the cluster using the kubectl apply command. For example:
    ```
    
    kubectl apply -f deployment.yaml
    ```
   This command will create a deployment for your application based on the specifications in the deployment.yaml file.
3. Verify that the deployment was created successfully by running the following command:

```arduino

kubectl get deployments
```

This command will list all the deployments in your cluster.

Step 3: Create a service for your application

After your application has been deployed, you can create a service to expose it to the internet. To create a service, follow these steps:
1. Create a Kubernetes service manifest file with the specifications of your service.
2. Apply the service manifest file to the cluster using the kubectl apply command. For example:
```

kubectl apply -f service.yaml
```
This command will create a service for your application based on the specifications in the service.yaml file.

3. Verify that the service was created successfully by running the following command:

```arduino
kubectl get services
```
This command will list all the services in your cluster.

Step 4: Use ingress to expose your service to the internet

To expose your service to the internet, you can use ingress. Ingress is a Kubernetes resource that provides a way to manage external access to the services in your cluster. To use ingress, follow these steps:
1. Install the NGINX ingress controller in your cluster using the following command:

```bash

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/cloud/deploy.yaml
```



This command will install the NGINX ingress controller in your cluster.
2. Create an ingress manifest file with the specifications of your ingress resource. For example:

```yaml

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /myapp
        pathType: Prefix
        backend:
          service:
            name: my-service
            port:
              name: http
```



This file defines an ingress resource that routes traffic from the host `myapp.example.com` to the service named `my-service`.
2. Apply the ingress manifest file to the cluster using the kubectl apply command:

```

kubectl apply -f ingress.yaml
``` 
3. Verify that the ingress was created successfully by running the following command:

```arduino

kubectl get ingress
```



This command will list all the ingresses in your cluster.
4. Create a DNS record for the host `myapp.example.com` that points to the external IP address of the ingress controller.
5. Verify that the service is accessible from the internet by accessing the URL `http://myapp.example.com/myapp` in a web browser.

Conclusion:

In this documentation, we have shown you how to set up a Kubernetes cluster in GCP, deploy an application to the cluster, create a service for the application, and use ingress to expose the service to the internet. This is just the beginning of what you can do with Kubernetes and GCP. With these tools, you can build and deploy complex applications at scale with ease.


# Container Registry

To use the Google Cloud Platform (GCP) Container Registry with Dockerfiles and deploy the container image to a Google Kubernetes Engine (GKE) cluster, you can follow these steps:

1. Enable the Container Registry API in the GCP Console.

2. Build the Docker image using the Dockerfile and tag it with the GCP Container Registry URL:

   ```sh
   docker build -t gcr.io/[PROJECT-ID]/[IMAGE]:[TAG] .
   ```

   Replace `[PROJECT-ID]` with your GCP project ID, `[IMAGE]` with the name of your image, and `[TAG]` with a version tag for the image.

3. Push the Docker image to the GCP Container Registry:

   ```sh
   docker push gcr.io/[PROJECT-ID]/[IMAGE]:[TAG]
   ```

4. Create a Kubernetes deployment YAML file to deploy the image to a GKE cluster:

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: my-deployment
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
         - name: my-container
           image: gcr.io/[PROJECT-ID]/[IMAGE]:[TAG]
           ports:
           - containerPort: 80
   ```

   Replace `[PROJECT-ID]`, `[IMAGE]`, and `[TAG]` with the values used when tagging and pushing the image to the GCP Container Registry.

5. Apply the deployment YAML file to the GKE cluster:

   ```sh
   kubectl apply -f my-deployment.yaml
   ```

   This will deploy the container image to the GKE cluster.

Note: You may need to authenticate Docker to push the image to the GCP Container Registry using the `gcloud` CLI tool. You can do this by running the following command:

```sh
gcloud auth configure-docker
```


### Using CI/CD with GCR

To build Docker images and push them to the Google Cloud Platform (GCP) Container Registry as part of a CI/CD pipeline, you can follow these steps:

1. Set up authentication to access the GCP project:

   You will need to authenticate your CI/CD system to access your GCP project in order to push the Docker images to the GCP Container Registry. One way to do this is to create a service account with appropriate permissions and download a key file in JSON format. Then, set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the path of the key file in your CI/CD system.

2. Write a Dockerfile to build the Docker image:

   Create a Dockerfile with instructions to build the Docker image for your application. The Dockerfile should include all necessary dependencies and configurations required to run your application.

3. Write a script to build and tag the Docker image:

   In your CI/CD pipeline, write a script to build the Docker image and tag it with the GCP Container Registry URL. The URL should follow the format `gcr.io/[PROJECT-ID]/[IMAGE]:[TAG]`. Replace `[PROJECT-ID]` with your GCP project ID, `[IMAGE]` with the name of your Docker image, and `[TAG]` with a version tag for the image. For example:

   ```sh
   # Build and tag the Docker image
   docker build -t gcr.io/my-project/my-image:1.0 .
   ```

4. Push the Docker image to the GCP Container Registry:

   Once the Docker image is built and tagged, push it to the GCP Container Registry using the `docker push` command:

   ```sh
   # Push the Docker image to the GCP Container Registry
   docker push gcr.io/my-project/my-image:1.0
   ```

5. Use the Docker image in your Kubernetes deployment:

   After the Docker image is pushed to the GCP Container Registry, you can use it in your Kubernetes deployment YAML file to deploy the container image to a GKE cluster. The YAML file should reference the Docker image in the format `gcr.io/[PROJECT-ID]/[IMAGE]:[TAG]`. For example:

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: my-deployment
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
         - name: my-container
           image: gcr.io/my-project/my-image:1.0
           ports:
           - containerPort: 80
   ```

   Replace `[PROJECT-ID]`, `[IMAGE]`, and `[TAG]` with the values used when tagging and pushing the image to the GCP Container Registry.

Note: You may also consider using a container registry service integrated with your CI/CD pipeline, such as Google Cloud Build, which can automate the process of building and pushing Docker images to the GCP Container Registry.