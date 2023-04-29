---
sidebar_position: 4
id: Other Cloud Constructs
slug: /basics/other-cloud-constructs
---

## Compute Engine

Google Cloud Platform (GCP) Compute Engine is a Infrastructure as a Service (IaaS) offering that provides virtual machine instances on demand. With Compute Engine, you can run virtual machines (VMs) in Google's data centers and take advantage of the power and flexibility of the cloud.

The gcloud CLI is a command-line tool that allows you to manage your GCP resources. With gcloud, you can create, manage, and delete Compute Engine instances, disks, networks, and firewalls.

Here are the basic steps for working with GCP Compute Engine using the gcloud CLI:

1. Install the gcloud CLI on your local machine and authenticate with your GCP account.

2. Create a Compute Engine instance using the `gcloud compute instances create` command. You can specify the instance name, machine type, image, and other options. For example:

   ```
   gcloud compute instances create my-instance --machine-type n1-standard-1 --image-family debian-10 --image-project debian-cloud
   ```

3. Connect to the instance using SSH. You can use the `gcloud compute ssh` command to connect to the instance and run commands. For example:

   ```
   gcloud compute ssh my-instance --command "ls -l"
   ```

4. Configure networking and firewalls. By default, Compute Engine instances are not publicly accessible. You can configure networking and firewalls to allow access to your instances. Here's how:

    - Create a VPC network: A VPC network is a virtual network that provides isolation and security for your instances. You can create a VPC network using the `gcloud compute networks create` command. For example:

      ```
      gcloud compute networks create my-network --subnet-mode auto
      ```

    - Create a firewall rule: A firewall rule is used to allow or deny traffic to and from your instances. You can create a firewall rule using the `gcloud compute firewall-rules create` command. For example:

      ```
      gcloud compute firewall-rules create allow-http --allow tcp:80 --target-tags http-server
      ```

      This command creates a firewall rule that allows TCP traffic on port 80 and applies to instances with the "http-server" tag.

    - Apply tags to instances: You can apply tags to instances to associate them with specific firewall rules. You can use the `gcloud compute instances add-tags` command to apply tags to instances. For example:

      ```
      gcloud compute instances add-tags my-instance --tags http-server
      ```

      This command applies the "http-server" tag to the "my-instance" instance.

In summary, with the gcloud CLI, you can create, manage, and delete Compute Engine instances, connect to instances using SSH, and configure networking and firewalls to allow access to your instances.

### Existing Image

To use GCP Compute Engine using gcloud CLI with an existing image, follow the steps below:

1. First, ensure that you have installed the gcloud CLI and authenticated to your Google Cloud account.

2. Create a new Compute Engine instance using the `gcloud compute instances create` command. Here's an example:

   ```
   gcloud compute instances create my-instance --image-project ubuntu-os-cloud --image-family ubuntu-1804-lts --machine-type n1-standard-1
   ```

   This command will create a new instance named "my-instance" with the Ubuntu 18.04 LTS image on a standard n1 machine type.

3. Once the instance is created, you can connect to it using SSH. Here's an example:

   ```
   gcloud compute ssh my-instance
   ```

4. You can also run commands on the instance using the `gcloud compute ssh` command. Here's an example:

   ```
   gcloud compute ssh my-instance --command "ls -l"
   ```

   This command will connect to the "my-instance" instance and run the "ls -l" command.

5. If you want to use a different image for your instance, you can specify it using the `--image` flag. Here's an example:

   ```
   gcloud compute instances create my-instance --image-family debian-10 --image-project debian-cloud --machine-type n1-standard-1
   ```

   This command will create a new instance named "my-instance" with the Debian 10 image on a standard n1 machine type.

That's it! You can now use the gcloud CLI to manage your Compute Engine instances with existing images.


## Lambda or Cloud Function

Google Cloud Functions is a serverless computing platform that allows you to run code in response to events without the need to manage infrastructure. You can write your code in Node.js, Python, Go, or other languages and deploy it to Cloud Functions, and it will automatically scale based on demand. Cloud Functions are event-driven, which means they are triggered by events such as HTTP requests, Cloud Storage changes, Pub/Sub messages, and more.

Here's how Cloud Functions work:

1. You write your code in the language of your choice, following the Cloud Functions programming model. This programming model includes the function signature, which defines the input and output parameters of your function.

2. You deploy your code to Cloud Functions using the gcloud CLI or the Cloud Console. During deployment, you can specify the trigger for your function, such as an HTTP request or a Pub/Sub message.

3. When an event occurs that matches your function's trigger, Cloud Functions automatically spins up a container and runs your function in that container.

4. Your function processes the event and produces a response, which is sent back to the caller or saved to a storage bucket.

To trigger a Cloud Function using an API, you can create an HTTP trigger for your function. This will allow you to invoke your function using an HTTP request. Here's how to create an HTTP trigger for your Cloud Function:

1. Deploy your Cloud Function with an HTTP trigger. You can do this using the gcloud CLI or the Cloud Console. When you deploy your function, you'll need to specify the HTTP trigger and the URL path for your function.

2. Authenticate the API request. If you want to require authentication for the API request, you can use Cloud Endpoints or Firebase Authentication to authenticate the request. Cloud Endpoints is a service that allows you to create APIs that are protected by API keys or OAuth 2.0 tokens. Firebase Authentication is a service that allows you to authenticate users using email and password, social media accounts, or custom authentication systems.

3. Send an HTTP request to your Cloud Function's URL. You can use any HTTP client to send the request, such as cURL, Postman, or the Requests library in Python. The request should include any required headers or data for your function to process.

4. Cloud Functions will invoke your function and return the response to the API client.

In summary, Cloud Functions is a serverless computing platform that allows you to run code in response to events. To trigger a Cloud Function using an API, you can create an HTTP trigger for your function and authenticate the API request using Cloud Endpoints or Firebase Authentication.

An example of setting up a Cloud Function and invoking it using cURL with gcloud authentication:

1. First, authenticate with gcloud by running the following command:

   ```
   gcloud auth login
   ```

   This will open a browser window and prompt you to sign in with your Google account. Follow the instructions to complete the authentication process.

2. Next, create a new Cloud Function using the gcloud CLI. Let's create a simple function that returns a "Hello, World!" message:

   ```
   gcloud functions deploy helloWorld --runtime=nodejs14 --trigger-http --entry-point=helloWorld
   ```

   This command deploys a new function called "helloWorld" with the Node.js 14 runtime and an HTTP trigger. The `--entry-point` flag specifies the name of the function to be executed when the function is triggered.

3. Now, let's invoke the function using cURL with gcloud authentication. Open a new terminal window and enter the following command:

   ```
   gcloud auth application-default print-access-token | \
   curl -H "Authorization: Bearer $(cat -)" https://[YOUR_REGION]-[YOUR_PROJECT_ID].cloudfunctions.net/helloWorld
   ```

   Replace `[YOUR_REGION]` with the region where your function is deployed (e.g., `us-central1`) and `[YOUR_PROJECT_ID]` with your GCP project ID. This command retrieves an access token using the `gcloud auth application-default print-access-token` command and passes it to cURL using the `Authorization` header.

4. The response should be a "Hello, World!" message. If you want to pass parameters to the function, you can include them in the cURL command using query parameters or request body, as explained in the previous example.

In summary, setting up a Cloud Function and invoking it using cURL with gcloud authentication is similar to the previous example, but with an additional step to retrieve an access token using the `gcloud auth application-default print-access-token` command. You can then pass the access token to cURL using the `Authorization` header to authenticate the request.

### Invoke from k8s `Deployment`

To invoke a Cloud Function from a Kubernetes deployment using a system account, you can use the default service account for the Kubernetes cluster. Here's an example of how to do this:

1. First, create a Kubernetes deployment that will invoke the Cloud Function. This deployment should include a container that runs the code to invoke the function. For example, you could create a container that runs a Python script using the `google-cloud-functions` library:

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
           image: my-image:latest
           command: ["python3", "my-script.py"]
   ```

   Replace `my-image:latest` with the name and tag of your container image, and `my-script.py` with the name of the script that will invoke the Cloud Function.

2. Next, create a Kubernetes service account for the deployment. This service account will be used to authenticate requests to the Cloud Function. You can create a new service account using the following command:

   ```
   kubectl create serviceaccount my-service-account
   ```

3. Grant the service account permission to invoke the Cloud Function by adding the `cloudfunctions.invoker` role to the service account's IAM policy. You can do this using the following command:

   ```
   gcloud iam service-accounts add-iam-policy-binding --role=roles/cloudfunctions.invoker --member=serviceAccount:[YOUR_PROJECT_ID].svc.id.goog[my-namespace/my-service-account] [YOUR_SERVICE_ACCOUNT_EMAIL]
   ```

   Replace `[YOUR_PROJECT_ID]` with your GCP project ID, `my-namespace` with the namespace of your deployment, and `my-service-account` with the name of the service account you created. Replace `[YOUR_SERVICE_ACCOUNT_EMAIL]` with the email address of the service account, which you can find in the GCP Console or using the following command:

   ```
   gcloud iam service-accounts list --filter=my-service-account --format='value(email)'
   ```

4. Finally, configure your Kubernetes deployment to use the service account by adding the `serviceAccountName` field to the pod specification:

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
         serviceAccountName: my-service-account
         containers:
         - name: my-container
           image: my-image:latest
           command: ["python3", "my-script.py"]
   ```

   With this configuration, the container in your deployment will use the default service account to authenticate requests to the Cloud Function.

5. In your code, you can then invoke the Cloud Function using the Google Cloud Functions client library for your language of choice. For example, in Python:

   ```python
   from google.cloud import functions_v1
   client = functions_v1.CloudFunctionsServiceClient()
   name = client.function_path('[YOUR_PROJECT_ID]', '[YOUR_REGION]', '[YOUR_FUNCTION_NAME]')
   response = client.call_function(name, data)
   ```

   Replace `[YOUR_PROJECT_ID]` with your GCP project ID, `[YOUR_REGION]` with the region where your function is deployed, `[YOUR_FUNCTION_NAME]` with the name of your function, and `data` with any additional data to pass to the function.

6. Once you've tested your deployment and verified that it can successfully invoke the Cloud Function, you can trigger it using an HTTP request. To do this, you can expose the deployment as a Kubernetes service, which will assign a stable IP address to the deployment and route incoming traffic to the container running your code.

   For example, you could expose the deployment on port 80 using the following service definition:

   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: my-service
   spec:
     selector:
       app: my-app
     ports:
     - name: http
       port: 80
       targetPort: 8080
     type: LoadBalancer
   ```

   This service definition exposes the deployment as a load-balanced service with a stable IP address, accessible using the HTTP protocol on port 80.

7. To trigger the Cloud Function using an HTTP request, you can send a POST request to the URL of the Kubernetes service, passing any necessary data as the request body. For example, using `curl`:

   ```
   curl -X POST http://[SERVICE_IP_ADDRESS] -d '{"key": "value"}'
   ```

   Replace `[SERVICE_IP_ADDRESS]` with the IP address of the Kubernetes service, and `{"key": "value"}` with any data you want to pass to the Cloud Function. When the request is received by the Kubernetes service, it will be forwarded to the container running your code, which will in turn invoke the Cloud Function using the service account credentials.


## PubSub

Google Pub/Sub is a messaging service that allows you to send and receive messages between independent applications. It provides reliable, scalable, and asynchronous messaging between applications in a distributed system, making it ideal for building event-driven architectures, data pipelines, and real-time streaming applications.

The basic idea behind Pub/Sub is that you have publishers, which send messages to a topic, and subscribers, which receive messages from the same topic. Each topic can have multiple subscribers, and each message is delivered to every subscriber.

Here's an example of how you might use Pub/Sub to build a simple event-driven application:

1. First, you would create a Pub/Sub topic using the Google Cloud Console or the gcloud command-line tool. You can specify a name for the topic, as well as any configuration options you need.

   ```
   gcloud pubsub topics create my-topic
   ```

2. Next, you would create one or more subscribers that are interested in receiving messages from the topic. You can create subscribers using the Google Cloud Console or the gcloud command-line tool.

   ```
   gcloud pubsub subscriptions create my-subscription --topic my-topic --ack-deadline 30
   ```

3. Now, you can start publishing messages to the topic. You can do this using the Google Cloud Console, the gcloud command-line tool, or the Pub/Sub API.

   ```
   gcloud pubsub topics publish my-topic --message "Hello, world!"
   ```

4. Finally, your subscribers can consume the messages from the topic using the Google Cloud Console, the gcloud command-line tool, or the Pub/Sub API.

   ```
   gcloud pubsub subscriptions pull my-subscription --auto-ack --limit=10
   ```

   This command will retrieve up to 10 messages from the subscription and automatically acknowledge them. You can also use other options to control the behavior of the pull operation, such as the maximum number of messages to retrieve or the timeout for waiting for messages.

To consume data using curl, you can use the Pub/Sub REST API. Here's an example of how you might set up a subscription and then pull messages from it using curl:

1. First, create a subscription using the gcloud command-line tool:

   ```
   gcloud pubsub subscriptions create my-subscription --topic my-topic
   ```

2. Next, get the subscription's name using the following command:

   ```
   gcloud pubsub subscriptions describe my-subscription --format 'value(name)'
   ```

   This command will output the subscription's full name, which you will need for the next step.

3. Now, use curl to pull messages from the subscription:

   ```
   curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \
        -H "Content-Type: application/json" \
        "https://pubsub.googleapis.com/v1/projects/[PROJECT_ID]/subscriptions/[SUBSCRIPTION_NAME]:pull" \
        -d '{"returnImmediately":false, "maxMessages":10}'
   ```

   Replace `[PROJECT_ID]` with the ID of your Google Cloud project, and `[SUBSCRIPTION_NAME]` with the name of your subscription (which you obtained in step 2). This command will use the OAuth2 access token obtained by `gcloud auth print-access-token` to authenticate the request, and will retrieve up to 10 messages from the subscription.

   Note that you can also use the `gcloud pubsub subscriptions pull` command to pull messages from a subscription, as shown in the previous example. However, if you need to integrate with other tools or systems that do not have the gcloud command-line tool installed, using the Pub/Sub REST API with curl can be a useful alternative.