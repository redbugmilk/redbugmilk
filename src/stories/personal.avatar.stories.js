import React from 'react';
import PersonalAvatar from '../components/Personal.avatar';

export default {
    title: 'Personal Avatar wrapper',
};

export const toStorybook = () => <PersonalAvatar />;

toStorybook.story = {
    name: 'Personal Avatar wrapper',
};