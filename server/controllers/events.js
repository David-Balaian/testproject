import '../config/amplify-config.js';
import { API, graphqlOperation } from 'aws-amplify';
const { createEvent } = require('../GraphQL');
 // Import GraphQL mutation

export async function getEvent(req, res) {
    return res.status(200).json({success: true})
}

export async function createNewEvent(req, res) {
    const {eventName, eventDescription, date} = req.body
    try {
        // Generate random data for the new event
        const eventData = {
          name: eventName,
          description: eventDescription,
          date: date,
        };
        // Call the GraphQL mutation to create the event
        const response = await API.graphql(graphqlOperation(createEvent, { input: eventData }));
        console.log('New event created:', response.data.createEvent);
        return res.status(200).json({success: true})
      } catch (error) {
          console.error('Error creating event:', error);
          return res.status(500).json({success: false, error: error.message})
      }
}