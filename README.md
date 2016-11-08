# Frontend Exercise Backend

## Installation

Make sure that you use Serverless v1.

1. Run `npm install`
2. Deploy with `serverless deploy`

## How to use

Simply perform requests against the exposed endpoints:

### Create

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/dev/entries --data '{ "body" : "Learn Serverless" }'
```

### Read all


```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/entries
```

### Read one

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/entries/<id>
```

### Update

```bash
curl -X PUT https://XXXX.execute-api.region.amazonaws.com/dev/entries/<id> --data '{ "body" : "Understand Serverless" }'
```

### DELETE

```bash
curl -X DELETE https://XXXX.execute-api.region.amazonaws.com/dev/entries/<id>
```

## AWS services used

- Lambda
- API Gateway
- DynamoDB
