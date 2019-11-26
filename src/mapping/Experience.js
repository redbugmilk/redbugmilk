import React from 'react';
import { mappingMenuInformation } from './InternalMenu';
import { Build, Work, Face, Code } from '@material-ui/icons';
import uminho from '../assets/images/uminho.png';
import aalto from '../assets/images/aalto.svg';

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

const mappingTimeLineInformation = (imageSrc, dates, description, id, position) => ({
    imageSrc,
    dates,
    description,
    id,
    position,
});

const generateTimeLineInformation = () => ([
    mappingTimeLineInformation(uminho, ["2002", "2008"], <p>Teste</p>, "Minho University", "Master's Degree in Communication Engineering"),
    mappingTimeLineInformation(aalto, ["2002", "2008"], <p>Teste</p>, "Aalto University", "Participation in the Erasmus Program")
]);

export { generateExperienceInformation, generateTimeLineInformation };
