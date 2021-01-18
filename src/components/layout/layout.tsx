// 3rd party imports
import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// interfaces
import { siteProps } from '../../interfaces';

// components
import { Header } from '../header';

// styles
import './layout.css';

export const Layout: React.FC = ({ children }): ReactElement => {
  const { site }: siteProps = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};
