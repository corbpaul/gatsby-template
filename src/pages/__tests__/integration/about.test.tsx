/**
 * @group integration
 */

// 3rd party imports
import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery } from 'gatsby';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

// component
import AboutPage from '../../about';

beforeEach(() => {
  (StaticQuery as jest.Mock).mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`,
        },
      },
    }),
  );
});

const data = {
  pageJson: {
    title: 'GatsbyJS Title',
    subtitle: 'GatsbyJS subtitle',
    links: [
      {
        key: 'test',
        href: '/test',
        text: 'Test',
      },
    ],
  },
};

describe('<AboutPage />', () => {
  it('renders the correct title', () => {
    const { getByText } = render(<AboutPage data={data} />);
    expect(getByText(data.pageJson.title)).toBeInTheDocument();
  });

  it('renders the correct subtitle', () => {
    const { getByText } = render(<AboutPage data={data} />);
    expect(getByText(data.pageJson.subtitle)).toBeInTheDocument();
  });

  it('renders the correct link', () => {
    const link = data.pageJson.links[0];

    const { getByText } = render(<AboutPage data={data} />);
    expect(getByText(link.text)).toBeInTheDocument();
    expect(getByText(link.text).closest('a')).toHaveAttribute(
      'href',
      data.pageJson.links[0].href,
    );
  });

  describe('meta tags', () => {
    it('renders the correct meta title', () => {
      render(<AboutPage data={data} />);

      expect(Helmet.peek().title).toBe('About | GatsbyJS');
    });
  });

  describe('accessibility', () => {
    it('has zero accessibility issues', async () => {
      const { container } = render(<AboutPage data={data} />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
