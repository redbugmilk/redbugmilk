import React from "react";
import PersonalLanguage from "../components/Personal.language";

export default {
  title: "Personal language ",
  components: PersonalLanguage,
};

const Template = (args) => <PersonalLanguage {...args} />;
export const OpenLanguage = Template.bind({});
OpenLanguage.args = {
  isOpen: true,
};
export const CloseLanguage = Template.bind({});
CloseLanguage.args = {
  isOpen: false,
};
