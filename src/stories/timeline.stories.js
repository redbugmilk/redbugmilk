import React from 'react';
import Timeline from '../components/Timeline';
import generateTimeLineInformation from '../mapping/TimeLine';

export default {
    title: 'Timeline',
    component: Timeline
};

const Template = (args)=> <Timeline {...args} />;

export const toStorybook = Template.bind({});
toStorybook.args = {
    title: "Education",
    data: generateTimeLineInformation()
}

