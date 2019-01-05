# Module 1 - Design Resilient Architecture

## Storage

### 1. EC2 Instance Store
fast. use for cache/temp data. it dies if the instance dies and can't be extended.

### 2. EBS
attachable. encryption, snapshots, persist after stopped or terminated an instance, you can attach multiple EBSs to an instance. Raid 0 can be created.

Two types of EBS: SSD and HDD
* SSD - random access. 2 sub-types: general purpose (gp2) and provisioned IOPS (io1)
* HDD - sequencial access. 2 sub-types: cold (sc1) and throughput optimized (st1)

### 3. EFS
shared - multiple instances can access the same volume. elastic capacity. NFS 4.0/4.1. Linux only.

### 4. S3
* strong consistency for new objects. eventual consistant for updates.

Two types:
* Standard - cheaper to access
* IA - cheaper for storage and more expensive for access

Encryption:
* Server side encryption (at rest): SSE-S3, SSE-KMS, SSE-C
* Encryption in transit - HTTPS

### 5. Glacier
Retrival types:
* expadated - more expensive and up to 5 min
* standard
* bulk - cheap but 12 hours

## High available vs fault-tolerant
fault-tolerant is higher bar than HA. It means the user should not have any impact!

## Question about Cloud Formation
If you want to use CF to deploy the same base AMI to two regions, use mappings to specify the base AMI since AMI IDs are different in each region

##  Lambda
Print statements are written to CloudWatch logs

## Question about RTO and RPO
RTO - recorevy time objective. time to recover.
RPO - recovery point objective. how much data is lost.
