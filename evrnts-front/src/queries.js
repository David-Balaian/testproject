import { gql } from 'urql';

export const GET_REPOSITORIES = gql`
  query GetRepositories($username: String!) {
    user(login: $username) {
      repositories(first: 10) {
        nodes {
          name
          description
        }
      }
    }
  }
`;
