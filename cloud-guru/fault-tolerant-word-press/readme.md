## Components on AWS
* Security Group for public facing section - Web DMZ. Port 80 and 22 from anywhere - 0.0.0.0/0
* Security Group for RDS. Talk to Web DMZ over MySQL port. source - Web DMZ SG.
* RDS. MySQL, Multi-AZ Deployment. Not publicly available. Assign the RDS SG.
* S3 bucket for WordPress
* S3 for assets
* Cloudfront distribution for the assets
* Route53 for a DNS name
* IAM - role that allows EC2 access S3
* Create EC2. Install and run WordPress using a bash script. Attach to the Web DMZ SG.
* Copy the static files to S3 using the CLI from the EC2 instance
* ALB. Connect it to the Web DMZ SG. Set healthy.html as health check and register it to the EC2

### Next Lab
High level - we will created 3 read nodes behind autoscaling group and ALB and a single instance that only the admin can access and it will sync the static assets into S3 using a cron job.
The read nodes also have cron job but this one reads from S3.

* Create two AMIs.
Create image of the WordPress EC2 instance.
* Create auto scaling groups. 3 instances on all AZs.
