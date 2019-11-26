import React from 'react';
import Timeline from '../components/Timeline';
import generateTimeLineInformation from '../mapping/TimeLine';

export default {
    title: 'Timeline',
};

export const toStorybook = () => <Timeline title="Education" data={generateTimeLineInformation()} />;

toStorybook.story = {
    name: 'Timeline wrapper',
};
