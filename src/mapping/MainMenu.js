import React from 'react';
import { MenuBook, Work, Face } from '@material-ui/icons';

const mappingMenuInformation = (id, icon, title) => ({
    id,
    icon,
    title,
});

const variant = {
    experience: <Work fontSize="small" color="action" />,
    education: <MenuBook fontSize="small" color="action" />,
    personal: <Face fontSize="small" color="action" />,
}
const generateMenuInformation = () => ([
    mappingMenuInformation(0, variant["experience"], "Experience"),
    mappingMenuInformation(1, variant["education"], "Education")
]);

export {
    mappingMenuInformation,
    generateMenuInformation
}