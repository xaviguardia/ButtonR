import { ButtonPrimary } from ".";

export default {
  title: "Components/ButtonPrimary",
  component: ButtonPrimary,
  argTypes: {
    theme: {
      options: ["imagin", "kids", "teens"],
      control: { type: "select" },
    },
    ambient: {
      options: ["inverse", "default"],
      control: { type: "select" },
    },
    status: {
      options: ["disabled", "pressed", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["main", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    theme: "imagin",
    ambient: "inverse",
    status: "disabled",
    size: "main",
    className: {},
  },
};
