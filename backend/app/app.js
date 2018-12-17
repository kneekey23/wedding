'use strict'
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()
const router = express.Router()
const AWS = require('aws-sdk');
const dynamodbClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});
const uuidv4 = require('uuid/v4');

const tableName = "WeddingGuestList";

app.set('view engine', 'pug')

if (process.env.NODE_ENV === 'test') {
  // NOTE: aws-serverless-express uses this app for its integration tests
  // and only applies compression to the /sam endpoint during testing.
  router.use('/sam', compression())
} else {
  router.use(compression())
}

router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(awsServerlessExpressMiddleware.eventContext())


router.get('/guest', async (req, res) => {

  let response = await find(req.query);

  if(response.Item) {
    let completeGroup = await findByGroup(response.Item.groupId);
 
    res.json(completeGroup.Items);
  }
  else{
    res.json(response);
  }

  
})

router.put('/guest', async (req, res) => {
 let response = await insertPlusOne(req.body);
  res.json(response);
})

router.post('/guest', async(req, res) => {
  let updateResponse = await updateGuestAttending(req.body);
  res.json(updateResponse);
})

const insertPlusOne = async(body) => {
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
          },
          "groupId": {
            "S": body.groupId
          }
        }, 
      ReturnConsumedCapacity: "TOTAL", 
      TableName: tableName
     };
  try{
    let data = await dynamodbClient.putItem(params).promise();
    return data;
  } catch(error) {
      return error;
  }

}

const find = async(query) => {

  var params = {
    TableName: tableName,
    Key:{
        "firstName": query.firstName,
        "lastName": query.lastName
    }
  };

  try{
    let data = await dynamodbClient.get(params).promise();
    return data;
  } catch(error) {
      return error;
  }

}

const findByGroup = async(groupId) => {

  var params = { 
    TableName: tableName,
    IndexName: 'groupId-index',
    KeyConditionExpression: 'groupId = :group_id',
    ExpressionAttributeValues: { ':group_id': groupId} 
   }

try{
  let data = await dynamodbClient.query(params).promise();
  console.log(data);
  return data;
} catch(error) {
    return error;
}
}

const updateGuestAttending = async(guest) => {

  var params = {
    TableName:tableName,
    Key:{
        "firstName": guest.firstName,
        "lastName": guest.lastName
    },
    UpdateExpression: "set attending=:attend, foodChoice=:food",
    ExpressionAttributeValues:{
        ":attend": guest.attending,
        ":food": guest.foodChoice
    },
    ReturnValues:"UPDATED_NEW"
  };
  console.log(params);
  try{
    let data = await dynamodbClient.update(params).promise();
    console.log(data);
    return data;
  } catch(error) {
      return error;
  }
}

// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)
app.use('/', router)

// Export your express server so you can import it in the lambda function.
module.exports = app
