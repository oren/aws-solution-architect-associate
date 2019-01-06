## VPC Peering
What is this? Connect two VPCs so the traffic between them is not through the public internet. They can be from different accounts but the same region.


Limitations
* You can't create a VPC peering connection between VPCs that have matching or overlapping CIDR blocks
* You can't create a VPC peering connection between VPCs in different regions
* VPC peering doen't support transitive peering relationship
