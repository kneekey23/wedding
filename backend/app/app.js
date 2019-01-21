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
    console.log("this should be an array:" + completeGroup);
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

router.post('/status', async(req, res) => {
let updateStatus = await updatePlusOneStatus(req.body);
res.json(updateStatus);
})

const insertPlusOne = async(body) => {
  //to lower
  body.firstName = body.firstName.toLowerCase();
  body.lastName = body.lastName.toLowerCase();
  let id = uuidv4().toString();

  let attending = true;
  let plusOne = false;
  const { firstName, lastName, email, address, foodChoice, groupId } = body;
  var params = {
    TableName: tableName,
    Item: {
        id, firstName, lastName, email, address, foodChoice, groupId, attending, plusOne
    }
  }

  try{
    let data = await dynamodbClient.put(params).promise();
    console.log(data);
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
    console.log(data);
    return data;
  } catch(error) {
      return error;
  }
}

const findByGroup = async(groupId) => {
  console.log("groupId:" + groupId);
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

const updatePlusOneStatus = async(guest) => {

  var params = {
    TableName:tableName,
    Key:{
        "firstName": guest.firstName,
        "lastName": guest.lastName
    },
    UpdateExpression: "set plusOne=:plusOne",
    ExpressionAttributeValues:{
        ":plusOne": false
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
