/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      eventName
      eventDescription
      date
      id
      comments
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: TableEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        eventName
        eventDescription
        date
        id
        comments
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryEventsByIdEventDescriptionIndex = /* GraphQL */ `
  query QueryEventsByIdEventDescriptionIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryEventsByIdEventDescriptionIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        eventName
        eventDescription
        date
        id
        comments
        __typename
      }
      nextToken
      __typename
    }
  }
`;
