## Kinesis Services
* Streams
shards and EC2 that recieve messages and sends them to DynamoDB, S3, EMR, or Redshift

* Firehose
Abstract away the shards and EC2s. Lambda can query your data

* Analytics
Sits on top of Streams or Firehose - allows to run SQL queries on top of Streams and Firehose. Stores the output in S3, Redshift, or Elasticsearch
