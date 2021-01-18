// 3rd party imports
import * as React from 'react';

// require Gatsby
const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(({ to, ...rest }) =>
    React.createElement('a', {
      ...rest,
      href: to,
    }),
  ),
  StaticQuery: {
    mockImplementationOnce: jest.fn(),
  },
  useStaticQuery: jest.fn().mockReturnValue({
    site: {
      siteMetadata: {
        title: 'GatsbyJS',
      },
    },
  }),
};
