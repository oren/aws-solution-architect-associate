## 1. Operationl Excellence

Design Principles
* Infrastructure as code
* Annotate documentation
* Improve your processes
* Test failure scenarios and your response processes
* Learn and share your learning with the organization

### Areas
**Prepare**
* What factors drive your operational priorities?
* How do you design your workload to enable operability?
* How do you know that you are ready to support a workload?

**Operate**
* What factors drive your understanding of operational health?
* How do you manage operational events?

**Evolve**
* How do you evolve operations?

#### Services
CloudFormation, AWS Config, AWS Config rules (standards for workloads), CloudWatch, ElasticSearch (analyze logs)

## 2. Security
Design Principles:
* Separate duties and give minimal access.
* Enable traceability.
* Apply security in all layers.
* Automate security best practices.
* Protect data in transit and at rest.
* Keep people away from data.
* Prepare for security events.

Best practices:

Identity and Access Management:
* How do you manage credentials and authentication?
* How do you control human access?
* How do you control programmatic access?

Detective Controls:
* How do you detect and investigate security events?
* How do you defend against emerging security threats?

Infrastructure Protection:
* How do you protect your networks?
* How do you protect your compute resources?

Data Protection:
* How do you classify your data?
* How do you protect your data at rest?
* How do you protect your data in transit?

Incident Response:
* How do you respond to an incident?

## 3. Reliability
Design Principles:
* Test recovery procedures
* Automatic recovery
* Scale horizontally
* Provision resources accurately
* Manage change with automation

### Services
General service for reliability: Amazon CloudWatch
* Foundations: IAM, VPC, AWS Trusted Advisor, AWS Shield
* Change Management: CloudTrail, AWS Config, Auto Scaling, CloudWatch
* Failure Management: AWS CloudFormation, S3 for backups, Glacier for archives, AWS KMS.

## 4. Performance Efficiency
Design Principles:
* Avoid implementing solutions that exist as cloud services
* Deploy your system to multiple regions quickly
* Use serverless architecture
* Experiment
* Choose the right technology for your use-case

### Areas

**Compute**

* How do you select the best performing architecture?
* How do you select your compute solution?
* How do you configure your networking solution?

**Storage**

Optimal storage depeds on the following:
* Access Method - block, file, or object
* Patterns of Access - random or sequestial
* Throughput required
* Frequency of Access - online, offline, or archival
* Frequency of Update - worm, dynamic
* Availability Constraints
* Durability Constraints

Questions
* How do you select your storage solution?
* How do you ensure that you continue to have the most appropriate storage solution as new storage solutions and features are launched?
* How do you monitor your resources to ensure they are performing as expected?
* How do you ensure that the capacity and throughput of your storage solutions maches demand?

**Databases**

Optimal database solution depedns on the following: consistency, high availability, No-SQL, DR

Questions
* How do you select your database solution?
* How do you keep track of what's new in the database world?
* How do you monitor the performance of your database?
* How do you ensure that the capacity and throughput of your dbs matches demand?

Solutions
* Reduce load on your database and reduce latency with RDS read replicas
* Predictable latency between your office and AWS using Direct Connect
* Reduce latency by adding infrastructure in the region close to your cutsomers
* Reduce latency by cache stuff - ElastiCache or CloudFront

## 5. Cost Optimization
* Adopt a consumption model
* Measure overall efficiency
* Stop spending money on data center operations
* Analyze and attribute expenditure
* Use managed and application level services to reduce cost of ownership

### Services
* Cost-effective Resources: Cost Explorer - RI recommendations and more. CloudWatch and Trust Advisor. Aurora - remove licensing costs. AWS Direct Connect and Amazon CloudFront to optimize data transfer.
* Match supply and demand: Auto Scaling.
* Expenditure Awareness: Cost Explorer to track usage. AWS Budgets - get notify if expanses are above a threshold.
* Optimizing Over Time: AWS News Blog, What's new section, and AwS Trusted Advisor.
