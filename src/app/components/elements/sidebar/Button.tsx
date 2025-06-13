import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { css } from "@emotion/react";
import { COLORS } from "../../../styles/theme";

const buttonWrapper = css({
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
});
const button = css({
  backgroundColor: COLORS.ACCENT,
  color: "white",
  padding: "10px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  gap: "5px",
  "&:hover": {
    backgroundColor: COLORS.ACCENT_SECONDARY,
  },
});
const buttonTitle = css({
  fontWeight: "var(--font-weight-semibold)",
});

type CustomButtonProps = {
  onClick: () => void;
};

export default function CustomButton({ onClick }: CustomButtonProps) {
  return (
    <Box css={buttonWrapper}>
      <Button css={button} onClick={onClick}>
        <Typography align="center" css={buttonTitle}>
          Create New
        </Typography>
        <ControlPointIcon />
      </Button>
    </Box>
  );
}
