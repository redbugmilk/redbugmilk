import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export const mappingMenuInformation = (id, state, icon, title) => ({
    id,
    state,
    icon,
    title,
    onClick: (id) => console.log("###TESTE### ", id),
});

export const generateMenuInformation = () => ([
    mappingMenuInformation(0, true, <MenuBookIcon fontSize="medium" color="action" />, "Education"),
    mappingMenuInformation(1, false, <MenuBookIcon fontSize="medium" color="action" />, "Specialization")
]);