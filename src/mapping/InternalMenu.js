import React from 'react';
import { Build, Work, Face, Code} from '@material-ui/icons';

const mappingMenuInformation = (id, icon, title) => ({
    id,
    icon,
    title,
});

const variant = {
    timeline: <Work />,
    skills: <Face />,
    tools: <Build />,
    languages: <Code />,
}
const generateMenuInformation = () => ([
    mappingMenuInformation(0, variant["timeline"], "Experience"),
    mappingMenuInformation(1, variant["skills"], "Skills"),
    mappingMenuInformation(2, variant["tools"], "Tools"),
    mappingMenuInformation(3, variant["languages"], "Languages")
]);

export {
    mappingMenuInformation,
    generateMenuInformation
}