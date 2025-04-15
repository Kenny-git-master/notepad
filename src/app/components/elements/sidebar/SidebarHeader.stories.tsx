import SidebarHeader from "./SidebarHeader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SidebarHeader> = {
  title: "Components/SidebarHeader",
  component: SidebarHeader,
};

export default meta;
type Story = StoryObj<typeof SidebarHeader>;

export const Default: Story = {
  args: {
    onClose: () => {
      console.log("onClose");
    },
  },
};
