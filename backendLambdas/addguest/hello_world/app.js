const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const dynamodbClient = new AWS.DynamoDB({ region: "us-west-1" });
let response;

exports.lambdaHandler = async (event, context) => {
    try {
     
        const body = JSON.parse(event.body);
        console.log(body);
        var params = {
            Item: {
                // your column names here will vary, but you'll need do define the type
                "id": {
                    "S": uuidv4()
                },
                "firstName": {
                  "S": body.firstName
                },
                "lastName": {
                  "S": body.lastName
                },
                "phone": {
                  "S": body.phone
                },
                "email": {
                    "S": body.email
                },
                "address": {
                    "S": body.address
                },
                "plusOne": {
                    "BOOL": false
                },
                "attending": {
                    "BOOL": true
                }
              }, 
            ReturnConsumedCapacity: "TOTAL", 
            TableName: "GuestList"
           };
           
       response = await dynamodbClient.putItem(params).promise();

    } catch (err) {
        console.log("catch: " + err);
        return err;
    }

    return response;
};
