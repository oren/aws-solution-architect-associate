## Terminology

### Network Access Control List
* allow you to allow or deny traffic on a given port and IP
* Apply to the subnet. Only one ACL can be associated with a given subnet.
* You need to apply both inbound and outbound traffic rules (stateless).
* Can't span VPCs.
* If you create private ACL, all traffic is denied.

### Routing Tables
* Apply to the subnet.
* Connects components within the VPC. It defines where traffic is directed.
* You can have multiple route tables in a VPC.

### Security Groups
Apply to an instance.
You don't need to apply both inbound and outbound traffic rules. It's enough to apply the inbound (statefull).
They don't span VPCs.

### Internet Gateway
Allow internet access to our VPC. Only one can be attached.

## Questions
What's the difference between Security Group and a Routing Table?

both used to create traffic rules but Route table are used in VPC for traffic direction at a subnet level, while SG are for instance level.


## Lab - Build Your Own Custom VPC
High level: create VPC, two subnets, Internet Gateway

* Create a VPC. use CIDR of 10.0.0.0/16. choose IPV6. (it created a Route Table, a Network ACL, and a security Group)
* Create first subnet - 10.0.1.0. Choose AZ us-east-1a. choose CDIR block as 10.0.1.0/24
* Create second subnet - 10.0.2.0. chose different AZ - us-east-1b. choose CDIR block as 10.0.2.0/24
* Create Internet Gateway and attach it to the VPC
* Create Route Table (call it public-route-table or something similar) and add a new Route to it that allows any traffic (0.0.0.0/0) to access the Internet Gateway. Every subnet that is associated with that Route will be a public subnet.
* Also allow IPV6 - ::/0 -> Internet gateway
* Associate one of the subnets with the public route table to make it public
* Go to the subnets page. Pick the public subnet and go to Actions -> Modify auto-assign IP settings. check the 'enable auto-assign public IPv4 address'. From now on any EC2 that is launched in this subnet will get a public IP.
* Create two EC2s. One in each subnet. Notice that the EC2 that was launched in the public subnet have a public IP.
* Part of creating the EC2, create new SG. Allow ssh (port 22) and HTTP (port 80) to the entire world.
* For the private EC2, pick the default SG.

Notes:
* You can choose the CIDR which will define how many ip addresses you have. /24 = 256. but 5 IPs are reserved so there are only 251.
* If we don't create new Route Table, our subnets will be associated with the default Route Table. We prefer to create a new Route Table that will accept internet traffic and only connect it to the public subnet.

## Lab 2 - Build A Custom VPC - Part 2
High level: allow access to the privace EC2. We are turning it into a DB.

* Create new SG - allow SSH, MySQL, and HTTP/S, Al ICMP (ping my private instances from the public instances) from the ip addresses of the public subnet - 10.0.1.0/24
* Assign the SG to the private instance
* ssh to the public EC2 and try to ping the private EC2 and also ssh to it.

## Network Address Translation - NAT Instances & NAT Gateways
EC2 instances in a private subnet can’t access the Internet therefore can not access updates via a package manager. Both a NAT instance and NAT gateway can solve this problem.

NAT instance is a special EC2 that you create and allows outbound traffic to your instance. It's a single point of failure so AWS created a managed solution - NAT Gateway.

NAT Instance - exam Tips
* When creating a NAT instance, disable source/destination check on the instance.
* Nat instances must be in a public subnet.
* There must be a route out of the private subnet to the NAT instance, in order for this to work.
* The amount of traffic that NAT instances can support depedns on the instance size. If you are bottlenecking, increase the instance size.
* You can create HA using Autoscaling Groups, multiple subnets in different AZs, and a script to automate failover.
* Nat instance is behind security group.

NAT Gateways - exam Tips
* Preferred by the enterprise
* Scale automatically up to 10Gbps
* No need to patch
* Not associated with security groups
* Automatically assigned a public ip address
* Remember to update your route table (point them to the NAT Gateways). Make sure you have NAT Gateway in every AZ.
* No need to disable source/destination checks
* More secure than NAT instance

## Access Control Lists (ACLs)
ACL vs Security Group

Exam Tips:
* You VPC comes with default ACL and it allows all outbound and inbound traffic.
* You can create custom ACL which by default denies all inbound and outbound traffic until you add rules.
* Each subnet in your VPC must be associated with ACL. By default it will be the default network ACL.
* A subnet can only be associated to one ACL
* Network ACLs contain a numbered list of rules that is evaluated in order.

## Custom VPCs and ELBs
Application LB is the best choice unless you want super performance

## VPC Flow Logs
Record IP traffic in and out of your VPC. Saved in CloudWatch.

Limitations:
* You can't enable flow logs for VPCs that are peered with your VPC unless the peer VPC is in your account.
* You cannot tag a flow log.
* After you've created a flow log, you cannot change its configuration; for example, you can't associate a different IAM role with the flow log.

Traffic that can't be monitored:
* Traffic generated by instances when they contact the Amazon DNS server. If you use your own DNS server, then all traffic to that DNS server is logged.
* Traffic generated by a Windows instance for Amazon Windows license activation.
* Traffic to and from 169.254.169.254 for instance metadata.
* Traffic to and from 169.254.169.123 for the Amazon Time Sync Service.
* DHCP traffic.
* Traffic to the reserved IP address for the default VPC router

## NATs vs Bastions
* A NAT is used to provide internet traffic to EC2 instances in private subnets.
* A Bastion is used to securely administrater EC2s (using SSH or RDP) in private subnets. Australia calls them 'jump boxes'.

## VPC End Points
## VPC Clean Up
## Summary
## VPC Quiz
