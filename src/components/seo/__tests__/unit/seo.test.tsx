/**
 * @group unit
 */

// 3rd party imports
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { render } from '@testing-library/react';

// component
import { SEO } from '../..';

// @types/react-helmet is out-of-date and doesn't match the react-helmet lib
// therefore lang / metaTags will show as not existing, however they are
// returned from the module

describe('<SEO />', () => {
  const description = 'Unit tests';
  const lang = 'en-au';
  const title = 'SEO Test';

  it('renders the title', () => {
    render(<SEO title={title} />);
    expect(Helmet.peek().title).toBe(`${title} | GatsbyJS`);
  });

  describe('html attributes', () => {
    it('renders the default lang', () => {
      render(<SEO />);
      expect(Helmet.peek().htmlAttributes.lang).toBe('en-us');
    });

    it('renders the given lang', () => {
      render(<SEO lang={lang} />);
      expect(Helmet.peek().htmlAttributes.lang).toBe(lang);
    });
  });

  describe('meta tags', () => {
    it('renders the correct meta tags', () => {
      render(<SEO description={description} title={title} />);
      expect(Helmet.peek().metaTags).toEqual([
        { name: 'description', content: description },
        { name: 'og:title', content: title },
        { name: 'og:description', content: description },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ]);
    });
  });
});
