# Design Performant Architecture

## S3
Pay: storage (GB per month), transfer out of region, API requests
Free: transfer into S3, transfer from S3 to CloudFront or the same region

## Question - S3 vs block and file storage
S3 by default is replicated across AZs, not regions

## Question - two features of EBS
* EBS data is automatically replicated within an AZ (not across)
* EBS volumes can be encrypted
* Wrong answer: EBS data is lost when the attached instance is stopped

## DynamoDB
Read capacity unit (for an item up to 4kb in size)
* 1 strongly consistent read per sec
* 2 eventual consistent reads per sec

Write capacity unit (for an item up to 1km in size)
* 1 write per sec

## Question - which RDS engine supports read replica?
* MySQL, MariaDB, PostgreSQL, and Aurara
* Not supported: Oracle and Microsoft SQL Server

## Question - which three objects are good candidates to store in a cache?
* Session, shopping cart, product backlog
* not great: back account balance

Why? think which one changes very often. all three tend to change frequently. account balance - not so much.

## Question - App runs on EC2 in auto scaling group. It runs best on 9 and must have at least 6. Pick the most cost-efficient auto scaling group
* 9 EC2s across 3 AZ
* less good: 12 EC2s across 2 AZ. The reason is it's a bit wasteful. In both cases we can lose AZ and still be fine.

## Question - which of the following are characteristics of the auto scaling service on AWS?
* respond to changing conditions by adding or terminating Amazon EC2 instances
* Launces instances from a specified Amazon Machine Image (AMI)
* Enforces a minimum number of running Amazon EC2 instances
Not correct:
* Sends traffic to healthy instances. This is the job of ELB.
* Collects and tracks metrics and set alarms. This is the job of CloudWatch.
* Deliver push notifications. This is the job of SNS.

