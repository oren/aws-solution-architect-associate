# Summary of AWS Well-Architected Framework
* PDF, Jun 2018

## Table of Contents
```
1. Introduction
  Definitions
  On Architecture
  General Design Principles
2. The Five Pillars of the Well-Architected Framework
  Operational Excellence
  Security
  Reliability
  Performance Efficiency
  Cost Optimization
3. The Review Process
4. Conclusion
5. Further Reading
6. Appendix: Well-Architected Questions, Answers, and Best Practices
  Operational Excellence
  Security
  Reliability
  Performance Efficiency
  Cost Optimization
```

## 1. Introduction
### 1.1 Definitions
* Five pillars: OE, Security, Reliability, Performance Efficiency, Cost Optimization.
* The first two are not traded-of against the others.

### 1.2 On Architecture
Each team should have the expertise to evaluate and build robust solution on top of AWS. The key for doing it is set of practices and mechanisms. Well-Architected Framework (I'll call it WAF from now on) is the main mechanism. It allows CTOs and other tech leaders evaluate, compare, and identify gaps and needs across the organization.

### 1.3 General Design Principles
* Use only the resources you need thanks to auto scaling of cloud resources.
* Test systems at production scale thanks to on-demand infrastructure.
* Automate to increases your ability to experiment.
* Adapt to business needs thanks to automation and on-demand resources.
* Drive architectures using data.
* Simulate production cheaper and faster.

## 2. The Five Pillars of the Well-Architected Framework
### 2.1 Operational Excellence
Design Principles:
* Infrastructure as code
* Annotate documentation
* Improve your processes
* Test failure scenarios and your response processes
* Learn and share your learning with the organization

#### Services
CloudFormation, AWS Config, AWS Config rules (standards for workloads), CloudWatch, ElasticSearch (analyze logs)

### 2.2 Security
Design Principles:
* Separate duties and give minimal access.
* Enable traceability.
* Apply security in all layers.
* Automate security best practices.
* Protect data in transit and at rest.
* Keep people away from data.
* Prepare for security events.

### 2.3 Reliability
Design Principles:
* Test recovery procedures
* Automatic recovery
* Scale horizontally
* Provision resources accurately
* Manage change with automation

#### Services
General service for reliability: Amazon CloudWatch
* Foundations: IAM, VPC, AWS Trusted Advisor, AWS Shield
* Change Management: CloudTrail, AWS Config, Auto Scaling, CloudWatch
* Failure Management: AWS CloudFormation, S3 for backups, Glacier for archives, AWS KMS.

### 2.4 Performance Efficiency
Design Principles:
* Avoid implementing solutions that exist as cloud services
* Deploy your system to multiple regions quickly
* Use serverless architecture
* Experiment
* Choose the right technology for your use-case

### 2.5 Cost Optimization
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

## 3. Review Process 
