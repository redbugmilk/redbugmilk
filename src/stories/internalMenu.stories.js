import React from 'react';
import { generateMenuInformation } from "../mapping/InternalMenu";
import InternalMenu from '../components/InternalMenu'

export default {
    title: 'Internal Menu',
};

export const toStorybook = () => <InternalMenu menus={generateMenuInformation()} />;

toStorybook.story = {
    name: 'Internal Menu',
};
