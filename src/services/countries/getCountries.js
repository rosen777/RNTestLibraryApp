import {gql} from '@apollo/client';

export const getCountries = gql`
  {
    countries {
      name
      emoji
      phone
    }
  }
`;
