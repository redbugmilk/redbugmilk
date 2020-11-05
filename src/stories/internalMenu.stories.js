import React from "react";
import { generateMenuInformation } from "../mapping/InternalMenu";
import InternalMenu from "../components/InternalMenu";

export default {
  title: "Internal Menu",
  component: InternalMenu,
};

const Template = (args) => <InternalMenu {...args} />;

export const InternalMenuComponent = Template.bind({});

InternalMenuComponent.args = {
  value: 1,
  menus: generateMenuInformation(),
  onChange: () => console.log("changed"),
};
