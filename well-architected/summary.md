## Table of Contents

* [1. Operationl Excellence](#1-operationl-excellence)
	* [Areas](#areas)
* [2. Security](#2-security)
	* [Best practices:](#best-practices)
* [3. Reliability](#3-reliability)
	* [Areas](#areas-1)
* [4. Performance Efficiency](#4-performance-efficiency)
	* [Areas](#areas-2)
		* [1. Selection](#1-selection)
		* [2. Review](#2-review)
		* [3. Monitoring](#3-monitoring)
		* [4. Tradeoffs](#4-tradeoffs)
	* [Solutions](#solutions)
* [5. Cost Optimization](#5-cost-optimization)
	* [Areas](#areas-3)

## 1. Operationl Excellence
The ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.

Design Principles
* Infrastructure as code
* Annotate documentation
* Improve your processes
* Test failure scenarios and your response processes
* Learn and share your learning with the organization

### Areas
**1. Prepare**
* What factors drive your operational priorities?
* How do you design your workload to enable operability?
* How do you know that you are ready to support a workload?

Services: AWS Config and AWS Config rules can be used to create standards for workloads and to determine if environments are compliant with those standards before being put into production.

**2. Operate**
* What factors drive your understanding of operational health?
* How do you manage operational events?

Services: Amazon CloudWatch allows you to monitor the operational health of a workload.

**3. Evolve**
* How do you evolve operations?

Services: Amazon Elasticsearch Service (Amazon ES) allows you to analyze your log data to gain actionable insights quickly and securely.

## 2. Security
The ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies.

Design Principles:
* Separate duties and give minimal access.
* Enable traceability.
* Apply security in all layers.
* Automate security best practices.
* Protect data in transit and at rest.
* Keep people away from data.
* Prepare for security events.

### Areas
**1. Identity and Access Management**
* How do you manage credentials and authentication?
* How do you control human access?
* How do you control programmatic access?

Services: IAM, MFA, and AWS Organizations

**2. Detective Controls**
* How do you detect and investigate security events?
* How do you defend against emerging security threats?

Services: AWS CloudTrail, AWS Config (inventory), GuardDuty (managed threat detection), CloudWatch

**3. Infrastructure Protection**
* How do you protect your networks?
* How do you protect your compute resources?

Services: VPC, CloudFront, AWS Shield (integrates with CF), AWS WAF (firewall on CF or ALB)

**4. Data Protection**
* How do you classify your data?
* How do you protect your data at rest?
* How do you protect your data in transit?

Services: encryption in transit and at rest, Macie (find sensitive data), KMS (manage encryption keys)

**5. Incident Response**
* How do you respond to an incident?

Services: IAM can grant access to incident response teams, CloudFormation can help investigation by creating a 'clean room', CloudWatch Events can trigger automated responses like Lambda

## 3. Reliability
The ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.

Design Principles:
* Test recovery procedures
* Automatic recovery
* Scale horizontally
* Provision resources accurately
* Manage change with automation

### Areas
**1. Foundations**
* How are you managing AWS service limits for your accounts?
* How do you plan your network topology on AWS?

Services: IAM, VPC, AWS Trusted Advisor (service limits), AWS Shield (managed DDoS)

**2. Change Management**
* How does your system adapt to changes in demand?
* How do you monitor AWS resources?
* How do you implement change?

Services: CloudTrail, AWS Config, Auto Scaling, CloudWatch

**3. Failure Management**
* How do you back up data?
* How does your system withstand component failures?
* How do you test resilience?
* How do you plan for disaster recovery?

Services: AWS CloudFormation, S3 for backups, Glacier for archives, AWS KMS.

## 4. Performance Efficiency
The ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.

Design Principles:
* Avoid implementing solutions that exist as cloud services
* Deploy your system to multiple regions quickly
* Use serverless architecture
* Experiment
* Choose the right technology for your use-case

### Areas

#### 1. Selection
Resource Types:
**1. Compute**

* How do you select the best performing architecture?
* How do you select your compute solution?
* How do you configure your networking solution?

Solutions: Auto Scaling

**2. Storage**

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

Solutions: EBS (SSD or PIOPS), S3, and S3 transfer acceleration

**3. Databases**

Optimal database solution depedns on the following: consistency, high availability, No-SQL, DR

Questions
* How do you select your database solution?
* How do you keep track of what's new in the database world?
* How do you monitor the performance of your database?
* How do you ensure that the capacity and throughput of your dbs matches demand?

Solutions: RDS, DynamoDB, etc

**4. Network**
* How do you configure your networking solution?

Solutions: Route 53 with latency-based routing, VPC endpoints, AWS Direct Connect to reduce network distance or jitter

#### 2. Review
* How do you evolve your workload to take advantage of new releases?

Solutions: AWS Blog, What's new section on the AWS website

#### 3. Monitoring
* How do you monitor your resources to ensure they are performing as expected?

Solutions: CloudWatch that triggers actions on Lambda

#### 4. Tradeoffs
* How do you use tradeoffs to improve performance?

Solutions: ElastiCache, CloudFront, Snowball, RDS Read replicas.

### Solutions
* Reduce load on your database and reduce latency with RDS read replicas
* Predictable latency between your office and AWS using Direct Connect
* Reduce latency by adding infrastructure in the region close to your cutsomers
* Reduce latency by cache stuff - ElastiCache or CloudFront

## 5. Cost Optimization
Run systems to deliver business value at the lowest price point.

Design Principles:
* Adopt a consumption model
* Measure overall efficiency
* Stop spending money on data center operations
* Analyze and attribute expenditure
* Use managed and application level services to reduce cost of ownership

### Areas
**1. Expenditure Awareness**
* How do you govern usage?
* How do you monitor usage and cost?
* How do you decommission resources?

Services: Cost Explorer to track usage. AWS Budgets - get notify if expanses are above a threshold.

**2. Cost-effective Resources**
* How do you evaluate cost when you select services?
* How do you meet cost targets when you select resource type and size?
* How do you use pricing models to reduce cost?
* How do you plan for data transfer charges?

Services: Cost Explorer - RI recommendations and more. CloudWatch and Trust Advisor. Aurora - remove licensing costs. AWS Direct Connect and Amazon CloudFront to optimize data transfer.

**3. Match supply and demand**
*  How do you match supply of resources with demand?

Services: Auto Scaling

**4. Optimizing Over Time**
* How do you evaluate new services?

Services: AWS News Blog, What's new section, and AwS Trusted Advisor.
