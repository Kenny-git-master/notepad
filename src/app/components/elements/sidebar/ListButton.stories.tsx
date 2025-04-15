import ListButton from "./ListButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListButton> = {
  title: "Components/ListButton",
  component: ListButton,
};

export default meta;
type Story = StoryObj<typeof ListButton>;

export const Default: Story = {
  args: {
    isSidebarOpen: false,
    setIsSidebarOpen: (v: boolean) => {
      console.log("Sidebar toggled to:", v);
    },
  },
};
