Your team is trying to migrate a busy application to the cloud. They have established a VPN to an AWS VPC. While they are provisioning the EC2s in the VPC they want to see if it is possible to continue to route traffic to the on-premise servers using a load balancer inside of the VPC. What would you suggest?

A. Use a Classic ELB to route traffic to internal DNS names of the on-prem servers.
B. Use a Classic ELB to route traffic to EC2 instances configured to forward all traffic to the on-prem servers.
C. Provision a NAT Gateway for Network Address Translation and attach it to your VPN. Use a Network Load Balancer to distribute traffic to the NAT Gateway. Unregister the NAT Gateway when the migration is complete.
D. Configure a target group with IP addresses as the target type. Add the private IP addresses of the on-prem servers to the target group. Configure an ALB or NLB to route to the target group.

Answer: D

---

