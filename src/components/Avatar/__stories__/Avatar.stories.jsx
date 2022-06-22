import React from "react";

import { Avatar } from "../Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Avatar {...args} />;
export const SmallRound = Template.bind({});
SmallRound.args = {
  type: "round",
  size: "Small",
};

export const SmallSquare = Template.bind({});
SmallSquare.args = {
  type: "square",
  size: "Small",
};

export const MediumRound = Template.bind({});
MediumRound.args = {
  type: "round",
  size: "Medium",
};

export const MediumSquare = Template.bind({});
MediumSquare.args = {
  type: "square",
  size: "Medium",
};

export const LargeRound = Template.bind({});
LargeRound.args = {
  type: "round",
  size: "Large",
};

export const LargeSquare = Template.bind({});
LargeSquare.args = {
  type: "square",
  size: "Large",
};

export const DisabledRound = Template.bind({});
DisabledRound.args = {
  type: "round",
  size: "Large",
  disabled: true,
};

export const DisabledSquare = Template.bind({});
DisabledSquare.args = {
  type: "square",
  size: "Large",
  disabled: true,
};

export const Name = Template.bind({});
Name.args = {
    type: "square",
    imgUrl: null,
    backgroundColor: "var(--primary-color)"
};
