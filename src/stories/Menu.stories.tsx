import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '../components/Menu';

export default {
    title: 'Example/Menu',
    component: Menu,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
