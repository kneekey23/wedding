const fs = require('fs');
const parse = require('csv-parse');
const async = require('async');
const uuidv4 = require('uuid/v4');
const AWS = require('aws-sdk');
const dynamodbDocClient = new AWS.DynamoDB({ region: "us-west-1" });

var csv_filename = "./guestList.csv";

var isTrue = value => !!(['', 'null', '1', 'true', 'TRUE'].indexOf(value) + 1);

rs = fs.createReadStream(csv_filename);
parser = parse({
    columns : true,
    delimiter : ','
}, function(err, data) {
    var split_arrays = [], size = 25;

    while (data.length > 0) {

        //split_arrays.push(data.splice(0, size));
        let cur25 = data.splice(0, size)
        let item_data = []

        for (var i = cur25.length - 1; i >= 0; i--) {
          const this_item = {
            "PutRequest" : {
              "Item": {
                // your column names here will vary, but you'll need do define the type
                "id": {
                    "S": uuidv4()
                },
                "firstName": {
                  "S": cur25[i].firstName.toLowerCase()
                },
                "lastName": {
                  "S": cur25[i].lastName.toLowerCase()
                },
                "email": {
                    "S": cur25[i].email
                },
                "address": {
                    "S": cur25[i].address
                },
                "plusOne": {
                    "BOOL": isTrue(cur25[i].plusOne)
                },
                // "attending": {
                //     "BOOL": isTrue(cur25[i].attending)
                // },
                "groupId": {
                    "S": cur25[i].groupId
                }
              }
            }
          };

          item_data.push(this_item)
        }
        split_arrays.push(item_data);
    }
    data_imported = false;
    chunk_no = 1;
    async.each(split_arrays, (item_data, callback) => {
        const params = {
            RequestItems: {
                "WeddingGuestList" : item_data
            }
        }
        dynamodbDocClient.batchWriteItem(params, function(err, res, cap) {
            if (err === null) {
                console.log('Success chunk #' + chunk_no);
                data_imported = true;
            } else {
                console.log(err);
                console.log('Fail chunk #' + chunk_no);
                data_imported = false;
            }
            chunk_no++;
            callback();
        });

    }, () => {
        // run after loops
        console.log('all data imported....');

    });

});
rs.pipe(parser);