/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents(
    $id: String
    $eventDescription: String
    $eventName: String
    $eventDate: String
    $authorEmail: String
  ) {
    onCreateEvents(
      id: $id
      eventDescription: $eventDescription
      eventName: $eventName
      eventDate: $eventDate
      authorEmail: $authorEmail
    ) {
      id
      eventDescription
      eventName
      eventDate
      authorEmail
      __typename
    }
  }
`;
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents(
    $id: String
    $eventDescription: String
    $eventName: String
    $eventDate: String
    $authorEmail: String
  ) {
    onUpdateEvents(
      id: $id
      eventDescription: $eventDescription
      eventName: $eventName
      eventDate: $eventDate
      authorEmail: $authorEmail
    ) {
      id
      eventDescription
      eventName
      eventDate
      authorEmail
      __typename
    }
  }
`;
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents(
    $id: String
    $eventDescription: String
    $eventName: String
    $eventDate: String
    $authorEmail: String
  ) {
    onDeleteEvents(
      id: $id
      eventDescription: $eventDescription
      eventName: $eventName
      eventDate: $eventDate
      authorEmail: $authorEmail
    ) {
      id
      eventDescription
      eventName
      eventDate
      authorEmail
      __typename
    }
  }
`;
