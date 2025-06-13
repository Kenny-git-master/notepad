import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
  onConfirm: () => void;
};

export default function ConfirmModal({
  isModalOpen,
  setIsModalOpen,
  onConfirm,
}: ModalProps) {
  const alertTitle = css({
    fontWeight: "var(--font-weight-semibold)",
  });

  return (
    <>
      <BootstrapDialog onClose={() => setIsModalOpen(false)} open={isModalOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }} css={alertTitle}>
          Alert
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setIsModalOpen(false)}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to permanently delete this memo?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
