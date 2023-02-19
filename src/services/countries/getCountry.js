import {gql} from '@apollo/client';

export const getCountry = gql`
 query GetCountry($countryCode String!) { country(code: $countryCode) {
   name
   emoji
   phone
 }
}
`;
