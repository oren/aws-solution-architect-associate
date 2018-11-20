import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3');

class MyStack extends cdk.Stack {
    constructor(parent: cdk.App, id: string, props?: cdk.StackProps) {
        super(parent, id, props);

	new s3.Bucket(this, 'MyFirstBucket', {
          versioned: false
        });
    }
}

class MyApp extends cdk.App {
    constructor() {
        super();
        new MyStack(this, 'hello-cdk');
    }
}

new MyApp().run();

