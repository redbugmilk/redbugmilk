import React from 'react';
import { Build, Work, Face, Code} from '@material-ui/icons';

const mappingMenuInformation = (icon, label) => ({
    icon,
    label,
});

const variant = {
    timeline: <Work />,
    skills: <Face />,
    tools: <Build />,
    languages: <Code />,
}
const generateMenuInformation = () => ([
    mappingMenuInformation(variant["timeline"], "Experience"),
    mappingMenuInformation(variant["skills"], "Skills"),
    mappingMenuInformation(variant["tools"], "Tools"),
    mappingMenuInformation(variant["languages"], "Languages")
]);

export {
    mappingMenuInformation,
    generateMenuInformation
}