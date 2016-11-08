'use strict';

const AWS = require('./aws');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');
const lorem = require('lorem-ipsum');

module.exports = (event, callback) => {
  const params = {
    TableName: "entries",
    Item: {
      id: uuid.v1(),
      updatedAt: new Date().getTime(),
      body: lorem()
    }
  };

  return dynamoDb.put(params, (error, data) => {
    if (error) {
      callback(error);
    }
    callback(error, params.Item);
  });
};
