import React from 'react';
import { MenuBook, Work, Face } from '@material-ui/icons';

const mappingMenuInformation = (id, state, icon, title) => ({
    id,
    state,
    icon,
    title,
    onClick: (id) => console.log("###TESTE### ", id),
});

const variant = {
    experience: <Work fontSize="medium" color="action" />,
    education: <MenuBook fontSize="medium" color="action" />,
    personal: <Face fontSize="medium" color="action" />,
}
const generateMenuInformation = () => ([
    mappingMenuInformation(0, true, variant["experience"], "Experience"),
    mappingMenuInformation(1, false, variant["education"], "Education"),
    mappingMenuInformation(1, false, variant["personal"], "Personal")
]);

export {
    mappingMenuInformation,
    generateMenuInformation
}