import { generateClient } from "aws-amplify/api";
import { createEvents, deleteEvents, updateEvents } from "./mutations";
import { getEvents, listEvents } from "./queries";
const client = generateClient();

export const createNewEvent = async ({
  eventName,
  eventDescription,
  eventDate,
  authorEmail,
}) => {
  try {
    const eventData = {
      eventName,
      eventDescription,
      eventDate,
      authorEmail,
    };
    const response = await client.graphql({
      query: createEvents,
      variables: {
        input: eventData,
      },
    });
    return response.data.createEvent;
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

export const updateEvent = async ({
  eventName,
  eventDescription,
  eventDate,
  id,
  authorEmail,
}) => {
  try {
    const eventData = {
      eventName,
      eventDescription,
      eventDate,
      authorEmail,
      id,
    };
    const response = await client.graphql({
      query: updateEvents,
      variables: {
        input: eventData,
      },
    });
    return response;
  } catch (error) {
    console.error("Error update:", error);
  }
};

export const deleteEvent = async (item) => {
  try {
    const eventData = {
      id: item.id,
    };
    await client.graphql({
      query: deleteEvents,
      variables: {
        input: eventData,
      },
    });
  } catch (error) {
    console.error("Error error event:", error);
  }
};

export const getAllEvents = async () => {
  try {
    const response = await client.graphql({
      query: listEvents,
    });
    return response.data.listEvents.items;
  } catch (error) {
    console.error("Error -----------:", error);
  }
};

export const getEvent = async (id) => {
  try {
    const response = await client.graphql({
      query: getEvents,
      variables: {
        id,
      },
    });

    return response.data.getEvents;
  } catch (error) {
    console.error("Error creating event:", error);
  }
};
