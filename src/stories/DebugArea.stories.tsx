import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DebugArea } from '../components/DebugArea';

export default {
    title: 'Example/DebugArea',
    component: DebugArea,
} as ComponentMeta<typeof DebugArea>;

const Template: ComponentStory<typeof DebugArea> = (args) => (
    <DebugArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
    value: 'Test debug data',
};
