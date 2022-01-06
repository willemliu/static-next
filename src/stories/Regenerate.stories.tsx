import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Regenerate } from '../components/Regenerate';

export default {
    title: 'Example/Regenerate',
    component: Regenerate,
} as ComponentMeta<typeof Regenerate>;

const Template: ComponentStory<typeof Regenerate> = (args) => (
    <Regenerate {...args} />
);

export const Default = Template.bind({});
Default.args = {
    date: new Date().toUTCString(),
};
