import {graphql} from 'msw';

console.log('handlers');
export const handlers = [
  graphql.query('GetCountries', (req, res, ctx) => {
    console.log('GetCountries handler');
    return res(
      ctx.data({
        countries: [
          {
            name: 'United Kingdom',
            emoji: '🇬🇧',
            phone: '44',
            __typename: 'Country',
          },
          {
            name: 'France',
            emoji: '🇫🇷',
            phone: '33',
            __typename: 'Country',
          },
          {
            name: 'United States',
            emoji: '🇺🇸',
            phone: '1',
            __typename: 'Country',
          },
        ],
      }),
    );
  }),
];
