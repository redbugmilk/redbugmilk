import React from 'react';
import uminho from '../assets/images/uminho.png';
import aalto from '../assets/images/aalto.svg';
import Timeline from '../components/timeline';

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

export default {
    title: 'Timeline',
};

export const toStorybook = () => <Timeline title="Education" data={generateTimeLineInformation()} />;

toStorybook.story = {
    name: 'Timeline wrapper',
};
