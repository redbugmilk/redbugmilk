import React from "react";
import TimelineLeft from "../components/Timeline.left";
import uminho from "../assets/images/uminho.png";

export default {
  title: "Timeline - Left side",
  component: TimelineLeft,
};

const Template = (args) => <TimelineLeft {...args} />;

export const toStorybook = Template.bind({});
toStorybook.args = {
  name: "university minho",
  imageSrc: uminho,
  dates: ["11/2016"],
};
