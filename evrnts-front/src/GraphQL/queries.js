/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvents = /* GraphQL */ `
  query GetEvents($id: String!) {
    getEvents(id: $id) {
      id
      eventDescription
      eventName
      eventDate
      authorEmail
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
        id
        eventDescription
        eventName
        eventDate
        authorEmail
        __typename
      }
      nextToken
      __typename
    }
  }
`;
