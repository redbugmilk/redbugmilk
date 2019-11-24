import React from 'react';
import TimelineRight from '../components/Timeline.right';

export default {
    title: 'Timeline - Right side',
};

export const toStorybook = () => <TimelineRight title="Education"><p>teste</p></TimelineRight>;

toStorybook.story = {
    name: 'Timeline - Right side',
};
