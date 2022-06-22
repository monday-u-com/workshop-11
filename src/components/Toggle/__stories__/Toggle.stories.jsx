import React from "react";

import { Toggle } from "../Toggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;
export const DefaultState = Template.bind({});
DefaultState.args = {
  onText: "On",
  offText: "Off",
};

export const TrueValue = Template.bind({});

TrueValue.args = {
  onText: "On",
  offText: "Off",
  defaultValue: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  onText: "On",
  offText: "Off",
  disabled: true,
};

export const DisabledTrueValue = Template.bind({});

DisabledTrueValue.args = {
  onText: "On",
  offText: "Off",
  defaultValue: true,
  disabled: true,
};
