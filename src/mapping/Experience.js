import React from 'react';
import { mappingMenuInformation } from './InternalMenu';
import { Build, Work, Face, Code} from '@material-ui/icons';

const variant = {
    timeline: <Work />,
    skills: <Face />,
    tools: <Build />,
    languages: <Code />,
}
const generateExperienceInformation = () => ([
    mappingMenuInformation(0, variant["timeline"], "Experience"),
    mappingMenuInformation(1, variant["skills"], "Skills"),
    mappingMenuInformation(2, variant["tools"], "Tools"),
    mappingMenuInformation(3, variant["languages"], "Languages")
]);

export default generateExperienceInformation;