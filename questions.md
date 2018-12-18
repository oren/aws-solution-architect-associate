## RDS

What data transfer charge is incurred when replicating data from your primary RDS instance to your secondary RDS instance?
No charges

---

Under what circumstances would I choose provisioned IOPS over standard storage when creating an RDS instance?

If you use online transaction processing in your production environment.
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS
IOPS = input/output operations per second

---

Available engines:
MariaDB, SQL Server, MySQL, Oracle, PostgreSQL

---

When creating an RDS instance, you can select the Availability Zone into which you deploy it.
True

---

Which of the following is not a feature of DynamoDB?
Storing relational data

---

You can RDP or SSH in to an RDS instance to see what is going on with the operating system.
false

---

If you are using Amazon RDS Provisioned IOPS storage with a Microsoft SQL Server database engine, what is the maximum size RDS volume you can have by default?
16TB
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS

---

If you want your application to check RDS for an error, have it look for an ______ node in the response from the Amazon RDS API.
Error node

---

When you add a rule to an RDS DB security group, you must specify a port number or protocol.
Technically a destination port number is needed, however with a DB security group the RDS instance port number is automatically applied to the RDS DB Security Group.
Further information: http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurity

---

What happens to the I/O operations of a single-AZ RDS instance during a database snapshot or backup?
I/O may be briefly suspended while the backup process initializes (typically under a few seconds), and you may experience a brief period of elevated latency.

I/O may be briefly suspended while the backup process initializes (typically under a few seconds), and you may experience a brief period of elevated latency.
Further information: http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.BackingUpAndRestoringAmazonRDSInstances.html

---

MySQL installations default to port number x?
3306

---

If I wanted to run a database on an EC2 instance, which of the following storage options would Amazon recommend?
EBS

---

Can I "force" a failover for any RDS instance that has Multi-AZ configured?
Yes

## DynamoDB
Which of the following DynamoDB features are chargeable, when using a single region? (Choose 2)
read and write capacity and storage of data

storage of data within DynamoDB, therefore these two answers are correct. There is no charge for the transfer of data into DynamoDB, providing you stay within a single region (if you cross regions, you will be charged at both ends of the transfer.) There is no charge for the actual number of tables you can create in DynamoDB, providing the RCU and WCU are set to 0, however in practice you cannot set this to anything less than 1 so there always be a nominal fee associated with each table.
Further information: https://aws.amazon.com/dynamodb/pricing/

## EBS

You are hosting a MySQL database on the root volume of an EC2 instance. The database is using a large number of IOPS, and you need to increase the number of IOPS available to it. What should you do?
Add 4 additional EBS SSD volumes and create a RAID 10 using these volumes.



