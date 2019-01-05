Which of the following are true for Security Groups? (Choose 3)
* Security Groups support "allow" rules only.
* Security Groups evaluate all rules before deciding whether to allow traffic.
* Security Groups operate at the instance level.

---

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

---

In a custom VPC with new subnets in each AZ, there is a Route that supports communication across all subnets/AZs. Plus a Default SG with an allow rule 'All traffic, All protocols, All ports, from anything using this Default SG'.

Further information:
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html

---

When I create a new security group, all outbound traffic is allowed by default.
* true

---

A VPN connection consists of which of the following components? (Choose 2)
* Customer Gateway and Virtual Private Gateway

---

When connecting a VPN between AWS and a third party site, the Customer Gateway is created within AWS, but it contains information about the third party site e.g. the external IP address and type of routing. The Virtual Private Gateway has the information regarding the AWS side of the VPN and connects a specified VPC to the VPN. "Direct Connect Gateway" and "Cross Connect" are both Direct Connect related terminology and have nothing to do with VPNs.

Further information:
* https://docs.aws.amazon.com/vpc/latest/userguide/VPC_VPN.html
* https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways.html
* https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html

---

Are you permitted to conduct your own vulnerability scans on your own VPC without alerting AWS first?
* No

---

You have just created a 2nd VPC and launched an EC2 instance in a subnet of that VPC. You want this instance to be publicly available, but you forgot to assign a public IP address during creation. How might you make your instance reachable from the outside world?
* Create an Internet gateway and an Elastic IP address. Associate the Elastic IP with the EC2 instance.

An IGW is provided by default in a default VPC, but not in a manually created VPC. A Public IP address is needed, and of the options provided an EIP is the best option.

Further information:
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/working-with-vpcs.html
* https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-ip-addressing.html


Note:
* In Amazon VPC, an instance retains its private IP.
* When you create a custom VPC, a default Security Group, Access control List, and Route Table are created automaticaly. You must create your own subnets, Internet Gateway, and NAT Gateway (if you need one.)
