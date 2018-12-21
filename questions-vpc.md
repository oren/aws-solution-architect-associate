Which of the following are true for Security Groups? (Choose 3)
* Security Groups support "allow" rules only.
* Security Groups evaluate all rules before deciding whether to allow traffic.
* Security Groups operate at the instance level.

What is the purpose of an Egress-Only Internet Gateway? (Choose 2)
* Prevents IPv6 based Internet resources initiating a connection into a VPC
* Allows VPC based IPv6 traffic to communicate to the Internet

The purpose of an "Egress-Only Internet Gateway" is to allow IPv6 based traffic within a VPC to access the Internet, whilst denying any Internet based resources the possibility of initiating a connection back into the VPC. With this in mind, the latter two options are correct. The first two options cannot be correct as it does not support IPv4 data communication nor does it allow a Security Group to be associated with it.
Further information:
* https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html
* https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html
* https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat.html

By default, instances in new subnets in a custom VPC can communicate with each other across Availability Zones.
* True

In a custom VPC with new subnets in each AZ, there is a Route that supports communication across all subnets/AZs. Plus a Default SG with an allow rule 'All traffic, All protocols, All ports, from anything using this Default SG'.

Further information:
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html
