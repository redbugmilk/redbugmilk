import React from "react";
import TimelineRight from "../components/Timeline.right";

export default {
  title: "Timeline - Right side",
  component: TimelineRight,
};

const Template = (args) => <TimelineRight {...args} />;

export const toStorybook = Template.bind({});
toStorybook.args = {
  title: "Education",
  children: <p>teste</p>,
};
