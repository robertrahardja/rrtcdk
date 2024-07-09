import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { Code, Runtime, Function } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const index = new Function(this, "LambdaFunction", {
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset("lambda"),
      handler: "index.handler",
      environment: {
        acctId: Stack.of(this).account,
        region: Stack.of(this).region,
      },
    });

    const api = new LambdaRestApi(this, "LambdaRestApi", {
      handler: index,
    });
  }
}
