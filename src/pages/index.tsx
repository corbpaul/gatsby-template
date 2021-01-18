// 3rd party imports
import React, { ReactElement } from 'react';
import { Link, graphql } from 'gatsby';

// components
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

export interface IndexPageProps {
  data: {
    pageJson: {
      title: string;
      subtitle: string;
      links?: {
        key: string;
        href: string;
        text: string;
      }[];
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }): ReactElement => {
  const { title, subtitle, links } = data.pageJson;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {links &&
        links.map((link) => (
          <Link key={link.key} data-cy={`${link.key}-link`} to={link.href}>
            {link.text}
          </Link>
        ))}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    pageJson(internalName: { eq: "index" }) {
      title
      subtitle
      links {
        href
        key
        text
      }
    }
  }
`;
