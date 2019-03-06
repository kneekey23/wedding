#!/usr/bin/env bash

npm run build && aws s3 sync ./build s3://nickijustinsite/ --acl public-read --profile default
#aws s3 cp . s3://nickijustinsite/ --acl public-read --region us-west-2 --profile default --recursive
aws cloudfront create-invalidation --distribution-id E1B8Z1MNDXL4AI --paths /index.html /error.html
