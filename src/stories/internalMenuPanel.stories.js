import React from 'react';
import InternalMenuPanel from '../components/InternalMenuPanel';

export default {
    title: 'Internal Menu panel',
};

export const toHide = () => <InternalMenuPanel value={1} index={0} children={<p>Item 0</p>} />;
export const toShow = () => <InternalMenuPanel value={1} index={1} children={<p>Item 1</p>} />;

toHide.story = {
    name: 'Internal Menu - hide',
};

toShow.story = {
    name: 'Internal Menu - show',
};
