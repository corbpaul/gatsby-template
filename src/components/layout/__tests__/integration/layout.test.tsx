/**
 * @group integration
 */

// 3rd party imports
import * as React from 'react';
import { render } from '@testing-library/react';

// component
import { Layout } from '../..';

describe('<Layout />', () => {
  const child = 'Layout';

  it('render the header', () => {
    const { getByText } = render(<Layout>{child}</Layout>);
    expect(getByText('GatsbyJS')).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByText } = render(<Layout>{child}</Layout>);
    expect(getByText(child)).toBeInTheDocument();
  });
});
