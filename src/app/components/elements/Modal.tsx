import { Button, CloseButton, Dialog, Portal, Flex } from "@chakra-ui/react";

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
  onConfirm: () => void;
};

export default function Modal({
  isModalOpen,
  setIsModalOpen,
  onConfirm,
}: ModalProps) {
  return (
    <Dialog.Root size="sm" open={isModalOpen} placement="center">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Flex>
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.CloseTrigger asChild>
                  <CloseButton
                    size="sm"
                    onClick={() => setIsModalOpen(false)}
                  />
                </Dialog.CloseTrigger>
              </Flex>
            </Dialog.Header>
            <Dialog.Body>
              <p>Are you sure you want to permanently delete this memo?</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button
                onClick={() => {
                  onConfirm();
                }}
              >
                Delete
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
