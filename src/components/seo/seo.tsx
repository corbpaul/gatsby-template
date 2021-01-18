// 3rd party imports
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

// interfaces
import { siteProps } from '../../interfaces';

export interface SEOProps {
  description?: string;
  lang?: string;
  title?: string;
}

export const SEO: React.FC<SEOProps> = ({
  description,
  lang = 'en-us',
  title,
}): ReactElement => {
  const { site }: siteProps = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const defaultTitle = site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet titleTemplate={`%s | ${defaultTitle}`}>
      {/* html attributes */}
      <html lang={lang} />

      {/* title attributes and value */}
      <title itemProp="name" lang={lang}>
        {title}
      </title>

      {/* multiple meta elements */}
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};
