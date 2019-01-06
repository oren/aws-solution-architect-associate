# Design Cost-Optimized Architectures

## EC2 - how to save money?
### Reserved Instances
long term lease. Cheaper

* Standard RI
* Convertable RI - can be converted to different instant types and sizes
* Scheduled RI - can be reserved for specific times. For example a few hours every weekend

### Spot Instances
spare compute. very cheap but risky - you might lose it if the price goes up. There are two ways to mitigate the risk: hibernate - put your instance to sleep if it goes above your bid, and spot blocks - reserve up to 6 hours in the spot market.

## Question
You have to run a batch job every Sunday night. The job completes in less than 90 minutes and cannot be postponed. Which EC2 payment model should you use?
* Scheduled instance

Not correct:
* on demand - not cheap
* reserved - not cheap since you don't need the instance most of the time
* Spot - the job can't be delayed
* Spot block with a block of 95 min - the job can't be delayed

