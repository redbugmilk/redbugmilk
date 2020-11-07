import React from "react";
import InternalMenuPanel from "../components/InternalMenuPanel";

export default {
  title: "Internal Menu panel",
  component: InternalMenuPanel,
};

const Template = (args) => <InternalMenuPanel {...args} />;

export const toHide = Template.bind({});
toHide.args = {
  value: 1,
  index: 0,
  children: <p>Item 0</p>,
};

export const toShow = Template.bind({});
toShow.args = {
  ...toHide.args,
  value: 0,
};

console.log(toShow.args);
