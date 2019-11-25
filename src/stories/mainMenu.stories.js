import React from 'react';
import MainMenu from '../components/MainMenu';
import { generateMenuInformation } from "../mapping/MainMenu";

export default {
    title: 'Main Menu',
};
 

export const toStorybook = () => <MainMenu 
    menus={generateMenuInformation()} 
    onClick={()=>console.log("teste")} 
    menuSelected={0}
/>;

toStorybook.story = {
    name: 'Main Menu',
};
