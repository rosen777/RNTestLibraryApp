import {gql} from '@apollo/client';

export const getCountries = gql`
  query GetCountries {
    countries {
      name
      emoji
      phone
    }
  }
`;
