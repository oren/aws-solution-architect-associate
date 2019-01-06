## ECS - Elastic Container Service
ECS is a managed service to run containers

* Task Definition - JSON file that defines one or more containers. It includes RAM, CPU, etc
* Cluster - a way to group containers together. You can maitnain 'desired cound' of task definitions in a cluster.
* Cluster can have different container types
* Clusters are region specific
* Docker instance can belong to one cluster only
* IAM can restrict access to a cluster
* ECS has two schedulers: service and customer
* You can connect Linux EC2 to a cluster using ECS agent
* Security groups operate at the EC2 level, not task or docker container level

