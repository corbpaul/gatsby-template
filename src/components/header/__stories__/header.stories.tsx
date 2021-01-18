import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from '../header';

export default {
  title: 'Header',
  component: Header,
};

const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  siteTitle: 'GatsbyJS',
};
