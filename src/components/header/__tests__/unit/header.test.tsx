/**
 * @group unit
 */

// 3rd party imports
import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

// component
import { Header } from '../..';

describe('<Header />', () => {
  const baseProps = {
    siteTitle: 'Site Title',
  };

  it('renders the title', () => {
    const { getByText } = render(<Header {...baseProps} />);
    expect(getByText(baseProps.siteTitle)).toBeInTheDocument();
  });

  describe('accessibility', () => {
    it('has zero accessibility issues', async () => {
      const { container } = render(<Header {...baseProps} />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
