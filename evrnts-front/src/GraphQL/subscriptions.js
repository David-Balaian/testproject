/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents(
    $eventName: String
    $eventDescription: String
    $date: AWSDateTime
    $id: ID
    $comments: [String]
  ) {
    onCreateEvents(
      eventName: $eventName
      eventDescription: $eventDescription
      date: $date
      id: $id
      comments: $comments
    ) {
      eventName
      eventDescription
      date
      id
      comments
      __typename
    }
  }
`;
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents(
    $eventName: String
    $eventDescription: String
    $date: AWSDateTime
    $id: ID
    $comments: [String]
  ) {
    onUpdateEvents(
      eventName: $eventName
      eventDescription: $eventDescription
      date: $date
      id: $id
      comments: $comments
    ) {
      eventName
      eventDescription
      date
      id
      comments
      __typename
    }
  }
`;
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents(
    $eventName: String
    $eventDescription: String
    $date: AWSDateTime
    $id: ID
    $comments: [String]
  ) {
    onDeleteEvents(
      eventName: $eventName
      eventDescription: $eventDescription
      date: $date
      id: $id
      comments: $comments
    ) {
      eventName
      eventDescription
      date
      id
      comments
      __typename
    }
  }
`;
