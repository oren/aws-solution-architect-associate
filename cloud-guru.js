Create an app with a single stack that contain an S3 bucket:

```
const cdk = require('@aws-cdk/cdk');
const s3 = require('@aws-cdk/aws-s3');

class MyStack extends cdk.Stack {
	constructor(parent, id, props) {
		super(parent, id, props);
		new s3.Bucket(this, 'MyFirstBucket', {
			versioned: true,
			encryption: s3.BucketEncryption.KmsManaged
		    });
	}
}

class MyApp extends cdk.App {
	constructor(argv) {
	    super(argv);
	    new MyStack(this, 'hello-cdk');
	}
}

new MyApp().run();
```

