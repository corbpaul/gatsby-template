// 3rd party imports
import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

export interface HeaderProps {
  siteTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ siteTitle }): ReactElement => (
  <header style={{ backgroundColor: '#000', marginBottom: '1.5rem' }}>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '1.5rem 1rem' }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{ color: '#fff', textDecoration: 'none', padding: '1rem 0' }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);
