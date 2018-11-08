import cdk = require('@aws-cdk/cdk');

class MyApp extends cdk.App {
    constructor(argv: string[]) {
        super(argv);
    }
}

new MyApp().run();
