import React from "react";
import MainMenu from "../components/MainMenu";
import { generateMenuInformation } from "../mapping/MainMenu";

export default {
  title: "Main Menu",
  component: MainMenu,
};

const Template = (args) => <MainMenu {...args} />;

export const MainMenuComponent = Template.bind({});

MainMenuComponent.args = {
  menuSelected: 0,
  menus: generateMenuInformation(),
  onClick: () => console.log("teste"),
};
