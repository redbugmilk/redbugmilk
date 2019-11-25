import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InternalMenu from '../components/InternalMenu';

const mappingMenuInformation = (id, state, icon, title) => ({
    id,
    state,
    icon,
    title,
    onClick: (id) => console.log("###TESTE### ", id),
});

const generateMenuInformation = () => ([
    mappingMenuInformation(0, true, <MenuBookIcon fontSize="medium" color="action" />, "Education"),
    mappingMenuInformation(1, false, <MenuBookIcon fontSize="medium" color="action" />, "Specialization"),
    mappingMenuInformation(1, false, <MenuBookIcon fontSize="medium" color="action" />, "Certification")
]);

export default {
    title: 'Internal Menu',
};

export const toStorybook = () => <InternalMenu menus={generateMenuInformation()} />;

toStorybook.story = {
    name: 'Internal Menu',
};
