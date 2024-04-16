const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = async (event) => {
    try {
        // Parse the incoming event data (assuming it's in JSON format)
        const itemData = JSON.parse(event.body);

        // Define your DynamoDB parameters
        const params = {
            TableName: 'Events',
            Item: itemData
        };

        // Write the item to DynamoDB
        await docClient.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item added successfully' })
        };
    } catch (error) {
        console.error('Error writing item to DynamoDB:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
