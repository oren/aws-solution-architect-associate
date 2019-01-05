If you want to point a domain name to an AWS elastic load balancer in Route 53, how would you need to configure the record set?

A. Use an IP address for one of the web instances as an "A" record for the domain.
B. Use an alias for the load balancer as the "A" record for the domain.
C. Use an IP address for the load balancer for the "A" record for the domain.
D. Create an alias for the load balancer and set as a "CNAME" for the domain.

Answer: B

---


What is required when configuring an S3 bucket for Route 53 DNS failover?

A. The record set must be of type "MX"
B. The bucket name must match the domain name
C. The record set cannot use an alias and must point to the IP address of the S3 endpoint
D. The S3 bucket must be in the same region as the hosted zone

Answer: B. To use an S3 bucket for Route 53 DNS failover, the bucket name must match the domain name.
Why D is incorrect? DNS records are global, not regional.
