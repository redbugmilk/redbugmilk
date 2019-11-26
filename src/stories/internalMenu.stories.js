import React from 'react';
import { generateMenuInformation } from "../mapping/InternalMenu";
import InternalMenu from '../components/InternalMenu'

export default {
    title: 'Internal Menu',
};

export const toStorybook = () => <InternalMenu menus={generateMenuInformation()} value={1} />;

toStorybook.story = {
    name: 'Internal Menu',
};
