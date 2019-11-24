import React from 'react';
import TimelineLeft from '../components/timeline.left';
import uminho from '../assets/images/uminho.png';

export default {
    title: 'Timeline - Left side',
};

export const toStorybook = () => <TimelineLeft name="university minho" imageSrc={uminho} dates={["11/2016"]} />;

toStorybook.story = {
    name: 'Timeline - Left side',
};
