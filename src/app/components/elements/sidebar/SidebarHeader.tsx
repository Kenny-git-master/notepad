import { css } from "@emotion/react";
import { COLORS } from "../../../styles/theme";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import IconButton from "@mui/material/IconButton";

import { SidebarHeaderProps } from "@/app/constants/interfaces";

const header = css({
  height: "25px",
  paddingRight: "5px",
  backgroundColor: COLORS.PRIMARY,
  textAlign: "right",
});

const iconButton = css({
  height: "23px",
  width: "25px",
});

const closeIcon = css({
  color: COLORS.SECONDARY,
});

export default function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <div css={header}>
      <IconButton css={iconButton} onClick={onClose}>
        <KeyboardDoubleArrowLeftIcon css={closeIcon} />
      </IconButton>
    </div>
  );
}
