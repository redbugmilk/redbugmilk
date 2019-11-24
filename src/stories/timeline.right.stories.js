import React from 'react';
import TimelineRight from '../components/timeline.right';

export default {
    title: 'Timeline - Right side',
};

export const toStorybook = () => <TimelineRight title="Education"><p>teste</p></TimelineRight>;

toStorybook.story = {
    name: 'Timeline - Right side',
};
