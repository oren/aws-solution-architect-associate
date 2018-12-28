## 1. Operationl Excellence
The ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.

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

Services: AWS Config and AWS Config rules can be used to create standards for workloads and to determine if environments are compliant with those standards before being put into production.

**Operate**
* What factors drive your understanding of operational health?
* How do you manage operational events?

Services: Amazon CloudWatch allows you to monitor the operational health of a workload.

**Evolve**
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

### Best practices:
Identity and Access Management:
* How do you manage credentials and authentication?
* How do you control human access?
* How do you control programmatic access?

Services: IAM, MFA, and AWS Organizations

Detective Controls:
* How do you detect and investigate security events?
* How do you defend against emerging security threats?

Services: AWS CloudTrail, AWS Config (inventory), GuardDuty (managed threat detection), CloudWatch

Infrastructure Protection:
* How do you protect your networks?
* How do you protect your compute resources?

Services: VPC, CloudFront, AWS Shield (integrates with CF), AWS WAF (firewall on CF or ALB)

Data Protection:
* How do you classify your data?
* How do you protect your data at rest?
* How do you protect your data in transit?

Services: encryption in transit and at rest, Macie (find sensitive data), KMS (manage encryption keys)

Incident Response:
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
**Foundations**
* How are you managing AWS service limits for your accounts?
* How do you plan your network topology on AWS?

**Change Management**
* How does your system adapt to changes in demand?
* How do you monitor AWS resources?
* How do you implement change?

**Failure Management**
* How do you back up data?
* How does your system withstand component failures?
* How do you test resilience?
* How do you plan for disaster recovery?

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
