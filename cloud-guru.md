# Cloud Guru Course

## AWS - 10,000 Foot Overview

* **Global Infrastructure:** Region (physical location with two or more AZs), AZ (data center), Edge location (endpoint for AWS for caching. Usually consist of CloudFront).
* **Compute**: EC2, EC2 Container Service, Elastic Beanstalk, Lambda, Lightsale, Batch
* **Storage**: S3, EFS (elastic file system), Glacier, Snowball, Storage Gateway (hybrid storage service that enables your on-premises applications to seamlessly use storage in the AWS Cloud)
* **Databases**: RDS (MySQL, PostgerSQL, Aurora), DynamoDB, Elasticache, Red Shift (Data
* **Migration**: AWS Migration Hub (track you apps while you migrate to AWS), Application Discovery Service (a way to track dependencies), DMS (Database MIgration Service), Server MIgration Service, Snowball
* **Networking & Content Delivery**: VPC, CloudFront, Route53, API Gateway, Direct Connect (dedicated line from your office to AWS)
* **Management Tools**: CloudWatch, CloudFormation, CloudTrail (audit trail. stores for 1 week), Config (monitors the entire AWS configuration. Has point-in-time snapshot), OpsWorks (More powerful version of Elastic Beanstalk. Automating the configuration of your environment. Uses Chef/Puppet), Service Catalog (manage catalog of services that are approved by your IT), System Manager (interface to manage your AWS resources. Example - roll out patch to your EC2s), Trusted Advisor (different than inspector. Advice around security and cost), Managed Services.
* **Analytics**: Athena (SOL queries on S3), EMR (Elastic Map Reduce. Process large data), CloudSearch (), ElasticSearch Service (), Kinesis (ingesting large data into AWS), Kinesis Video Streams (injest a lot of video streams), QuickSight (BI tool), Data Pipeline (move your data between services), Glue (ETL. Change data so it can fit in other services). For this exam we only care about EMR, Kinesis, and Data Pipeline.
* **Security & Identity & Compliance**: IAM, Cognito (device auth. Using Gmail, FB, LinkedIn on your phone), GuardDuty, Inspector (installed agent on your EC2 and it generate report of security vulnerabilities), Macie (scan S3 and find PII), Certificate Manager (managing SSL certs), CloudHSM (hardware security modules - store your ssh keys), Directory Services (integrating MSF active directory services with AWS), WAF (web application firewall. Layer 7/app firewall. Cross site scripting, SQL injection protection, etc), Shield (DDOS mitigation), Shield Advaced (dedicated team), Artifact (audit and compliance reports. Download and inspecting PCI reports etc).  For the exam you need to know the following: IAM, Inspector, CloudHSM, Directory Service, WAF, Shield, SSL Cert Manager.
* **Application Integration**: Step Functions (managing lambda functions), Amazon MQ (message queue - rabbit MQ), SNS (notification services. email/text when something happened), SQS (decouple your infra using a queue), SWF (simple workflow service). Step function and Amazon MQ are not in the exam.
* **Desktop & App Streaming**: Workspaces (VDI solution - running os like linux or windows on the cloud and streaming it on your device), AppSteram 2.0 (stream the app itself from the cloud into the device).

Not in the exam:

* **Developer Tools**: CodeStar (CI), CodeCommit (source control. private git repo), CodeBuild (compile, test, and package), CodeDeploy (deploy to EC2, on-prem, Lambda), CodePipeline (CD service), X-Ray (debug serverless apps), Cloud9 (IDE).
* **ML**: SageMaker (deep learning), Comprehend (sentiment analysis), DeepLens (AI-aware camera. Detect people. Stays on the device), Lex (audio to text), Machine Learning (through a dataset, get results, and predict the outcome), Polly (text to speech), Rekognition (what's in a file or video), Amazon Translate (text translation), Amazon Transcribe (speech to text).
* **Media Services**: Elastic Transcoder (resize video to fit in different devices), MediaConvert (create video for different devices), MediaLive (create video streams to different devices), MediaPackage (prepare and protect your videos for delivery), MediaStore (storage service for media. Uses for live and on demand content), MediaTailor (targeted ads into video streams).
* **AR/VR**: Sumerian (create AR/VR).
* **Mobile Service**: Mobile Hub (use AWS mobile SDK to access AWS), Pinpoint (push notifications), AWS AppSync (update data for offline data and more...), Device Farm (test app on real device), Mobile Analytics. 
* **Customer Engagement**: Connect (contact center as a service), Simple Email Service.  The last one might come up in the exam.
* **Business Productivity**: Alexa For Business (dial into a meeting room, inform IT that the printer is broken etc), Amazon Chime (text/video conference), WorkDocs (dropbox-like), WorkMail (office-365 like).  WorkDocs might come up.
* **IoT**: iOT (), iOT Device Management (), Amazon FreeRTOS (OS for microcontroller), Greengrass (sofware that lets you run local compute messaging data caching sync and ML interface capabilities for connected devices in secure way).
* **Game Development**: GameLift (help develop games).

