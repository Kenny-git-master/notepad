import Modal from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isModalOpen: true,
    setIsModalOpen: () => {
      console.log(`setIsModalOpen`);
    },
    onConfirm: () => {
      console.log(`onConfirm`);
    },
  },
};
