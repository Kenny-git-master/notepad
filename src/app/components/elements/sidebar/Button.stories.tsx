import CustomButton from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    onClick: () => {
      console.log("Button clicked!");
    },
  },
};
