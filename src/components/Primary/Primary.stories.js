import { Primary } from ".";

export default {
  title: "Components/Primary",
  component: Primary,
  argTypes: {
    color: {
      options: ["inverse", "standard"],
      control: { type: "select" },
    },
    status: {
      options: ["default", "pressed", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "inverse",
    status: "default",
    className: {},
    text: "primary",
    typographyButtonClassName: {},
  },
};
