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

## Identity Access Management (IAM)

* Users - people
* Groups - collection of users
* Roles - assign them to AWS resources
* Policy - a document that defines at least one permission

## AWS Object Storage and CDN - S3, Glacier and CloudFront

**S3**

fundamentals: key, value, version id, metadata (who owns it), subresourses (ACL - how can access, torrent)

Storage Tiers/Classes:

    S3 Standard - 99.99% availability, 99.999999999% durability, stored redundantly multiple devices in multiple facilities, designed to sustain loss of 2 facilities, immediately available, frequently accessed.
    S3 - IA (Infrequently Accessed) - 99.50% availability, 99.999999999% durability. Lower fee but charge for retrieval.
    S3 One zone IA (only one AZ) - not multiple AZ resilience. Deprecated: RRS - reduce redundancy storage
    Glacier (archived data, 3-5 hours to access) - cheap.

Charge for: storage, requests, storage management pricing, data transfer pricing (cross region replication), transfer acceleration (use cloudfront to make things fast. user upload to an edge location first)

0 bytes to 5 TB. unlimited storage. 100 buckets per account.

consistency models: read after write for PUTS (after writing object, you can read it right away), eventual consistency for overwrites PUTS and DELETES.

Access control: bucket ACL or policies

Tips: write to S3 - HTTP 200. load files faster by enable multipart upload. read the S3 FAQ.

**IAM Lab:**

Create 2 users (oren1 and oren2), create 2 groups: system-admins with AdministratorAccess policy, and HR with AmaonS3ReadOnlyAccess policy. add oren1 to system-admins and oren2 to HR. Attach another permission to oren2 - AmazonGlacierReadOnlyAccess. That's nice - you can attached permissions to a group or to a user.

Create role - allow EC2 write files to S3. Name it S3-Admin-Access and give it AmazonS3FullAccess Policy.

**S3 Lab:**

Create S3 buckets - one in the default region (us-east-1) and one in sidney.

**S3 Version control Lab:**

Versioning is enabled on a bucket level.

Enable versioning on east coast bucket. Upload the same file to a bucket after you modify it. Notice that you can go back to any version. similar to git.

Versioning stores all versions of an object, great as backup, can't be disabled (only suspended), integrated with Lifecycle rules, MFA can protect from changing the versioning state of your bucket or deleting an object version.

**Cross Replication Replication Lab:**

When object added/changes, it will be replicated on another bucket. Do that from the us-east-1 bucket to Sidney. They must be on separate region and have versioning enabled. delete markers are replicated. delete individual versions or delete markers will not be replicated.

Install the AWS CLI
sudo apt install python-pip
sudo pip install aws-shell
configure .aws/config and .aws/credentials
aws-shell
s3 ls

Here are a few commands to try:

s3 rb s3://oren-test-bucket-546
s3 cp --recursive s3://oren-test-bucket-545 s3://oren-test-bucket-548-sidney


**Lifecycle Management, S3-IA & Glacier Lab:**

Can be used with versioning, can be applied to current and previous versions, transition to standard IA (128kb and 30 days after creation), one-zone IA, Glacier (30 days after IA, or a day after if it's not in IA), or deletion the object.

**CloudFront**

Edge Location - where content is cached.  Origin - source of the content. S3, EC2, ELB, or Route53.  Distribution - collection of Edge Locations.

It also works with origin that is outside of AWS.

Web Distribution - used for websites.  RTMP - media streaming.

You update objects on Edge locations and the origin will get updated. Objects are cached using TTL. You can clear cached objects for a price.


**CloudFront Lab**

Create S3 bucket in a different bucket and add a public image to it. This bucket will be our origin for the cloudformation distribution.

Create CloudFront distribution. Web.

secure cloudfront: use signed URLs or signed cookies.

you can make the bucket private so the only way to access it is via the cloudfront URL.

**S3 Security**

bucket is private by default.

Two ways to secure s3: bucket policy (bucket level) and ACL (object level).

Encryption

4 ways to encrypt S3 and two types:

    In transit - SSL/TLS
    At Rest
        Server Side
            S3 Managed keys - SSE-S3. each object is encrypted with a unique key and employing strong multi-factor auth.
            AWS Key Management Services, Managed Keys - SSE-KMS. similar to SSE-S3 but there is special permissions, and has audit trail.
            Server Side Enrcyption with customer provided keys - SSE-C. You manage the encryption keys yourself. Amazon manage the encryption and decryption.
        Client side encryption

**Storage Gateway**

Connect on-premise to the cloud to store data to the AWS cloud. VM that you install on your data center.

4 types:

    File Gateway (NFS) - flat files. nothing is on-prem. everything is on S3, S3-IA, or Glacier (pics, videos, word docs, etc). You can apply lifecycle management policy.
    Volume Gateway (iSCSI) - not for flat files. for apps, dbs, oses. block-based storage. Stored as EBS snapshots. incremental backup and compressed. Two types:
        stored volumes - incremental EBS snapshots. virtual harddisk to S3. the entire drive is on-prem. faster than cached. less latency.
        cached volumes - you only keep the most recent data on-prem. the rest is in S3. twice the size of stored volume. 32 TiB.
    Tape Gateway (VTL) - tapes that are sent to Glacier. instead of physical taps you have virtual tapes on S3.

**SnowBall**

1. Snowball - transfer Petabytes of data into and out of AWS (S3). you get a snowball, upload your data and it's delivered to AWS and added to the cloud. import to S3 and export from S3. 256-bit encryption. data is erased after AWS uploads it.

2. Snowball edge - storage + compute (little AWS datacenter that you can bring on-premise). You can run lambda on it.

3. Snowmobile - container on a track. exobytes worth of data. 100PB.

**Snowball Lab**

**S3 Transfer Acceleration**

upload a file to an edge location instead of S3. the edge location will send it to the origin (s3).

Enable on a bucket. You get an endpoint.

**Create Static website**

URL for website on S3: http://mycloudguru3.website.s3-website-us-east-1.amazonaws.com (sitename.website-region.amazonaws.com)

URL for bucket: https://s3-eu-west-1.amazonaws.com/acloudguru1234
