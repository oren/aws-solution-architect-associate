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


## Generic
You have been asked to create VPC for your company. The VPC must support both Internet-facing web applications (ie they need to be publicly accessible) and internal private applications (i.e. they are not publicly accessible and can be accessed only over VPN). The internal private applications must be inside a private subnet. Both the internet-facing and private applications must be able to leverage at least three Availability Zones for high availability. At a minimum, how many subnets must you create within your VPC to achieve this?

6 - 3AZ and 2 subnets in each = 6 subnets

---

You work in the genomics industry, and you process large amounts of genomic data using a nightly Elastic Map Reduce (EMR) job. This job processes a single 3 Tb file which is stored on S3. The EMR job runs on 3 on-demand core nodes and four on-demand task nodes. The EMR job is now taking longer than anticipated, and you have been asked to advise how to reduce the completion time. Which of the following would you suggest?

You should reduce the input split size in the MapReduce job configuration, then adjust the number of simultaneous mapper tasks so that more tasks can be processed at once.

---


You have been asked to identify a service on AWS that is a durable key value store. Which of the services below meets this definition?

S3

---

With which AWS orchestration service can you implement Chef recipes?

Opsworks

---

You work for a major news network in Europe. They have just released a new mobile app that allows users to post their photos of newsworthy events in real time. Your organization expects this app to grow very quickly, essentially doubling its user base each month. The app uses S3 to store the images, and you are expecting sudden and sizable increases in traffic to S3 when a major news event takes place (as users will be uploading large amounts of content.) You need to keep your storage costs to a minimum, and you are happy to temporally lose access to up to 0.1% of uploads per year. With these factors in mind, which storage media should you use to keep costs as low as possible?

S3 IA

The key drivers here are availability and cost, so an awareness of cost is necessary to answer this. Full S3 is quite expensive at around $0.023 per GB for the lowest band. S3 standard IA is $0.0125 per GB, S3 OneZone-IA is $0.01 per GB, and Legacy S3-RRS is around $0.024 per GB for the lowest band. Of the offered solutions S3 One Zone-IA is the cheapest suitable option. Glacier cannot be considered as it is not intended for direct access, however it comes in at around $0.004 per GB. S3 has an availability of 99.99%, S3-IA has an availability of 99.9% while S3-1Zone-IA only has 99.5% Further information: https://aws.amazon.com/s3/pricing/https://aws.amazon.com/s3/storage-classes/?nc=sn&loc=3https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html

---

You are a security architect working for a large antivirus company. The production environment has recently been moved to AWS and is in a public subnet. You are able to view the production environment over HTTP. However, when your customers try to update their virus definition files over a custom port, that port is blocked. You log in to the console and you allow traffic in over the custom port. How long will this take to take effect?

Immediately

---

You work for a construction company that has their production environment in AWS. The production environment consists of 3 identical web servers that are launched from a standard Amazon linux AMI using Auto Scaling. The web servers are launched in to the same public subnet and belong to the same security group. They also sit behind the same ELB. You decide to do some testing: you launch a 4th EC2 instance into the same subnet and same security group. Annoyingly, your 4th instance does not appear to have internet connectivity. What could be the cause of this?

You have not assigned an elastic IP address to this instance.

---

Your company has decided to set up a new AWS account for test and dev purposes. They already use AWS for production, but would like a new account dedicated for test and dev so as to not accidentally break the production environment. You launch an exact replica of your production environment using a CloudFormation template that your company uses in production. However, CloudFormation fails. You use the exact same CloudFormation template in production, so the failure is something to do with your new AWS account. The CloudFormation template is trying to launch 60 new EC2 instances in a single availability zone. After some research you discover that the problem is ________.

For all new AWS accounts, there is a soft limit of 20 EC2 instances per region. You should submit the limit increase form and retry the template after your limit has been increased.

---

By definition, a public subnet within a VPC is one that

Has at least one route in its routing table that uses an Internet Gateway (IGW).

Confusing answer: Where the the Network Access Control List (NACL) permitting outbound traffic to 0.0.0.0/0.

---

You run a meme creation website that stores the original images in S3 and each meme's meta data in DynamoDB. You need to decide upon a low-cost storage option for the memes, themselves. If a meme object is unavailable or lost, a Lambda function will automatically recreate it but at a $10 licencing cost per creation. Which storage solution should you use to store the memes in the most cost effective way?

S3 IA

The Question describes a situation where low cost 1Zone-IA would be perfect. However it also says that there is a high licence cost with each meme generation. The storage savings between IA and 1Zone-IA are about $0.0025 this is small compared to the $10 for licencing. Therefore you may well be better to pay for full S3-IA.

Further information:
* https://aws.amazon.com/s3/storage-classes/?nc=sn&loc=3
* https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html

---

You need to add a route to your routing table that will allow connections to the internet from your subnet. Which of the following routes should you add?

Destination: 0.0.0.0/0 --> Target: your Internet gateway

Confusing answer: Destination: 192.168.1.258/0 --> Target: your Internet gateway

---

You work for a famous bakery who are deploying a hybrid cloud approach. Their legacy IBM AS400 servers will remain on premise within their own datacenter. However, they will need to be able to communicate to the AWS environment over a site-to-site VPN connection. What do you need to do to establish the VPN connection?

Set an ASN for the Virtual Private Gateway.

The termination IP address on the AWS side is not at the gateway. It is defined as part of the AWS VPN configuration process. Direct Connect could be a carrier, but is not a VPN its self.

Further information:
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpn-connections.html
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html

---

CloudWatch doesn't have memory graph by default. You can create a custom metric for that.

---

You've been tasked with building a new application with a stateless web tier for a company that produces reusable rocket parts. Which three services could you use to achieve this?
1. ELB, ElastiCache, and RDS
1. Cloudwatch, RDS, and DynamoDb
1. AWS Storage Gateway, ElastiCache, and ELB
1. RDS, DynamoDB, and ElastiCache

Correct answer: 4

The essence of a stateless installation is that the scalable components are disposable, and configuration is stored away from the disposable components. The best way to solve this type of problem is by elimination. Storage Gateway offers no advantage in this situation. CloudWatch is a reporting tool and will not help. An ELB will distribute load but will not really specific to stateless design. Elasticache is well suited for very short fast cycle data and is very suitable to replace in memory or on disk state data previously held on the web servers. RDS is well suited to structured and long cycle data, and DynamoDB is well suited for unstructured and medium cycle data. Both can be used for certain types of stateful data either in partner with or instead of Elasticache.

Further information:
* https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html
* https://aws.amazon.com/dynamodb/https://aws.amazon.com/elasticache/https://www.youtube.com/watch?v=uf6jVS0xlCY

---

You have launched a NAT instance in to a public subnet, and you have configured all relevant security groups, network ACLs, and routing policies to allow this NAT to function. However, EC2 instances in the private subnet still cannot communicate out to the internet. What troubleshooting steps should you take to resolve this issue?

Disable the Source/Destination Check on your NAT instance.

---

You have been engaged by a company to design and lead a migration to an AWS environment. The team is concerned about the capabilities of the new environment, especially when it comes to avoiding bottlenecks. The design calls for about 20 instances (C3.2xLarge) pulling jobs/messages from SQS. Network traffic per instance is estimated to be around 500 Mbps at the beginning and end of each job. Which network configuration should you plan on deploying?

Spread the Instances over multiple AZs to minimize the traffic concentration and maximize the fault tolerance.

When considering network traffic, you need to understand the difference between storage traffic and general network traffic, and the ways to address each. The 10Gbps is a red-herring, in that the 500Mbps only occurs for short intervals, and therefore your sustained throughput is not 10Gpbs. Wherever possible, use simple solutions such as spreading the load out rather than expensive high tech solutions.

Further information:
* http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-ec2-config.html
* http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html
* https://aws.amazon.com/ec2/instance-types/
* http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html

---

Your company likes the idea of storing files on AWS. However, low-latency service of the last few days of files is important to customer service. Which Storage Gateway configuration would you use to achieve both of these ends? (Choose 2)

1. File Gateways
1. Gateway-Stored
1. Gateway-Snapshot
1. Gateway-VTL
1. Gateway-Cached

---

Your company has just purchased another company. As part of the merger, your team has been instructed to cross connect the corporate networks. You run all your confidential corporate services in a VPC and use R53 for your Internal DNS. The merged company has all their confidential corporate services and Internal DNS on-premises. After establishing a Direct-Connect service between your VPC and their on-premise network, and confirming all the routing, firewalls, and authentication, you find that while you can resolve names against their DNS, the services in the other company are unable to resolve names of your AWS services. Why might this be happening?

1. Route53 is not an industry standard DNS service, and zone transfers and name resolution must be done via a proprietary API.
1. By design, The AWS DNS service does not respond to requests originating from outside the VPC.
1. The computers are not configured properly. You need to add the IP address of the R53 private hosted zone resolver into the DNS options of the IP stack.
1. AWS Route53 is an Internet service, and the other company needs to do lookups and zone transfers via the Internet, not the Direct-Connect link.
1. You cannot use DNS in this way. You need to merge the zones under a parent zone registered with ICANN.

Answer: By design, The AWS DNS service does not respond to requests originating from outside the VPC.

Route53 has a security feature that prevents internal DNS from being read by external sources. The work around is to create a EC2 hosted DNS instance that does zone transfers from the internal DNS, and allows itself to be queried by external servers.

Further information:
* https://forums.aws.amazon.com/message.jspa?messageID=637102
* http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-dns.html
* http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html
* https://d1.awsstatic.com/whitepapers/hybrid-cloud-dns-options-for-vpc.pdf

---

RDS supports: Aurora, MariaDB, and Oracle db engines

---

Which of the following operating systems are supported by the ECS Agent software? (Choose 5)

linux

---

Amazon Elasticache can fulfil a number of roles. Choose the operations from the following list which can be implemented using Elasticache for Redis. (Choose 3)

Amazon ElastiCache offers a fully managed Memcached and Redis service. Although the name only suggests caching functionality, the Redis service in particular can offer a number of operations such as Pub/Sub, Sorted Sets and an In-Memory Data Store. However, Elasticache is only a key-value store and cannot therefore store relational data. Further information: https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-use-c

Pub/Sub
Relational Data Store
Sorted Sets
In-Memory Data Store

Answer: pub/sub, sorted sets, in-memory data store

---

You have a database-style application that frequently has multiple reads and writes across the data set. Which of the following AWS storage services are capable of hosting this application? (Choose 2)

Answer: EBS or EFS.

You would either user EBS or EFS. S3 is for object storage, not applications; and Glacier is for data archiving.

---

Which of the following is not a feature of AWS Organizations?

1. Grouping all of your AWS accounts into Organisational Units (OUs) as part of a hierarchy
1. AWS accounts which are members of an Organization can have the benefit of Consolidated Billing
1. Hierarchical based control over groups of IAM users and roles, within multiple Accounts
1. Granular configuration of Security Groups within a VPC

Answer: 4 (I think)


---

You successfully configure VPC Peering between VPC-A and VPC-B. You then establish an IGW and a Direct-Connect connection in VPC-B. Can instances in VPC-A connect to your corporate office via the Direct-Connect service, and connect to the Internet via the IGW?

1. Yes: VPC Peering is designed to route traffic between the VPCs.
1. VPC peering does not support edge to edge routing.
1. Instances in VPC-A will be able to access the corporate office, but not the Internet.
1. Instances in VPC-A will be able to access the Internet, but not the corporate office.

---

You work for a large media organization who has traditionally stored all their media on large SAN arrays. After evaluating AWS, they have decided to move their storage to the cloud. Staff will store their personal data on S3, and will have to use their Active Directory credentials in order to authenticate. These items will be stored in a single S3 bucket, and each staff member will have their own folder within that bucket named after their employee ID. Which of the following steps should you take in order to help set this up? (Choose 3)

1. Use AWS security token service to create temporary tokens.
1. Create either a federation proxy or identity provider.
1. Create an IAM role.
1. Tag each folder with the staff members ID.
1. Create an IAM user for each member of staff and use their existing active directory password for the account.

---

You are a solutions architect with a manufacturing company running several legacy applications. One of these applications needs to communicate with services which are currently hosted on-premise. The people who wrote this application have left the company, and there is no documentation describing how the application works. You need to ensure that this application can be hosted in a bespoke VPC, but remains able to communicate to the back-end services hosted on-premise. Which of the following answers will allow the application to communicate back to the on premise equipment without the need to reprogram the application? (Choose 3)

1. You should ensure the VPC has an internet gateway attached to it. That way, you can establish a site-to-site VPN with the on-premise environment.
1. You should configure an AWS Direct Connect link between the VPC and the site with the on-premise solution.
1. You should configure your Elastic Load Balancer to act as a reverse proxy so that the EC2 instance can communicate back to the on-premise data center.
1. You should attach an Elastic IP address to the VPC so that it will be able to communicate with the on-premise site.
1. You should configure the VPC subnet in which the application sits so that it does not have an IP address range that conflicts with that of the on-premise VLAN in which the back end services sit.

---

To establish a successful site-to-site VPN connection from your on-premise network to an AWS Virtual Private Cloud, which of the following might be combined & configured? (Choose 4)

An on-premise Customer Gateway
1. A NAT instance
1. A Virtual Private Gateway
1. A Virtual Customer Gateway
1. A VPC with Hardware VPN Access
1. A private subnet in your VPC

---

The risk with spot instances is that you are not guaranteed use of the resource for as long as you might want. Which of the following are scenarios under which AWS might execute a forced shutdown? (Choose 4)

1. AWS sends a notification of termination and you receive it 120 seconds before the intended forced shutdown, but AWS do not action the shutdown.
1. AWS sends a notification of termination and you receive it 120 seconds before the forced shutdown, and you delay it by sending a 'Delay300' instruction before the forced shutdown takes effect.
1. AWS sends a notification of termination and you receive it 120 seconds before the forced shutdown, but you block the shutdown because you used 'Termination Protection' when you initialized the instance.
1. AWS sends a notification of termination and you receive it 120 seconds before the forced shutdown, but the normal lease expired before the forced shutdown.
1. AWS sends a notification of termination but you do not receive it within the 120 seconds and the instance is shutdown.
1. AWS sends a notification of termination and you receive it 120 seconds before the intended forced shutdown.

Answers: 1,4,5,6

notification of spot termination

Further information:
* https://aws.amazon.com/blogs/aws/new-ec2-spot-instance-termination-notices/
* http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.ht

---

CloudFormation supports YAML and JSON

---


