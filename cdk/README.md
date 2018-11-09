Setup AWS account
* Create user and a group. Give the group AdministratorAccess and add it to the user.
* Fill-in the config and credentials files based on your user:

```
cat ~/.aws/config
[default]
region = us-east-1

cat ~/.aws/credentials
[default]
aws_access_key_id = xxxxxxxxxxxxxxxxxxxx
aws_secret_access_key = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Install CDK and TypeScript
```
sudo npm install aws-cdk
cdk --version
sudo npm install -g typescript
```

Build CloudFormation
```
npm run build
or
npm run watch (to continuously build)
```

Synth (print out the CloudFormation that will run against your AWS account)
```
cdk synth

Resources:
  MyFirstBucketB8884501:
    Type: AWS::S3::Bucket
    Properties:
      VersioningConfiguration:
        Status: Enabled
  CDKMetadata:
    Type: AWS::CDK::Metadata
    Properties:
      Modules: "@aws-cdk/aws-codepipeline-api=0.15.2,@aws-cdk/aws-events=0.15.2,@aws-c\
        dk/aws-iam=0.15.2,@aws-cdk/aws-kms=0.15.2,@aws-cdk/aws-s3=0.15.2,@aws-c\
        dk/aws-s3-notifications=0.15.2,@aws-cdk/cdk=0.15.2,@aws-cdk/cx-api=0.15\
        .2,cdk=1.0.0"
```

Deploy
```
cdk deploy

hello-cdk: deploying...
hello-cdk: creating CloudFormation changeset...
 0/3 | 08:49:35 | CREATE_IN_PROGRESS   | AWS::S3::Bucket    | MyFirstBucket (MyFirstBucketB8884501)
 0/3 | 08:49:36 | CREATE_IN_PROGRESS   | AWS::CDK::Metadata | CDKMetadata
 0/3 | 08:49:36 | CREATE_IN_PROGRESS   | AWS::S3::Bucket    | MyFirstBucket (MyFirstBucketB8884501) Resource creation Initiated
 0/3 | 08:49:38 | CREATE_IN_PROGRESS   | AWS::CDK::Metadata | CDKMetadata Resource creation Initiated
 1/3 | 08:49:39 | CREATE_COMPLETE      | AWS::CDK::Metadata | CDKMetadata
 2/3 | 08:49:56 | CREATE_COMPLETE      | AWS::S3::Bucket    | MyFirstBucket (MyFirstBucketB8884501)
 3/3 | 08:49:58 | CREATE_COMPLETE      | AWS::CloudFormation::Stack | hello-cdk

 ✅   hello-cdk

Stack ARN:
arn:aws:cloudformation:us-east-1:435759087415:stack/hello-cdk/6ad1b140-e43f-11e8-8d3a-50d5ca6e6082
```
