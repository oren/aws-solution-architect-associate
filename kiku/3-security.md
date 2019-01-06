# Specify Secure Applications and Architectures

## Question
your AWS account admin left the company. She had access to the root user and a personal IAM administrator account. with these accounts he generated other IAM users and keys. Which of the following should you do today to protect your AWS infrastructure? select three
* change the password and add MFA to the root user
* rotate keys and change password for IAM users
* delete the admin's IAM user

Not correct:
* put an IP restriction on root user logins (it's impossible)
* delete all IAM users (not needed)
* relaunch all EC2 instances with new roles (roles are temporary credentials, not accounts)

## VPC
* Organizing usind subnets
* Securing using security groups (between resources) and ACLs (between subnets)
* isolating using internet gateways (traffic in), virtual private gateways (from in-prem), and NAT gateways (traffic out)
* traffic direction using routes in route tables (between subnets)

### Subnets
* Public: support in/out access to the public internet. include a routing table entry to an internet gateway
* Private: no routing table entry to an internet gateway, not directly accesible from the public internet. to support outbound traffic use jump box (NAT, proxy, bastion host)

## Security groups vs ACLs
* SG: allow only rules, stateful, apply to ENIs
* ACL: allow and deny rules, stateless, apply to subnets

## Services that allow traffic in and out of VPCs
* internet gateway - enable traffic inside from the internet
* virtual private gateway - connect to VPN
* direct connect - dedicated pipe between AWS to on-prem
* VPC peering - connect to other VPCs
* NAT gateways - allow outbound internet traffic from private subnets
