#!/usr/bin/env bash

sam package --s3-bucket nickijustin --template-file template.yaml --output-template-file packaged-sam.yaml
aws cloudformation deploy --template-file /Users/nickik/Projects/wedding/backend/app/packaged-sam.yaml --stack-name AwsServerlessExpressStack --capabilities CAPABILITY_IAM --region us-west-1