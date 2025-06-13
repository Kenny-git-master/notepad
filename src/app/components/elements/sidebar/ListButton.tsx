import { IconButton, Tooltip } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { css } from "@emotion/react";

import { COLORS } from "../../../styles/theme";
import { fadeInAnimation, fadeOutAnimation } from "@/app/styles/animations";
import { ListButtonProps } from "@/app/constants/interfaces";

const listbutton = css({
  position: "absolute",
  margin: "60px 10px",
  backgroundColor: COLORS.ACCENT,
  transition: "opacity 0.3s ease",
  color: "#fff",
  zIndex: 50,
  "&:hover": {
    backgroundColor: COLORS.ACCENT_SECONDARY,
  },
});

export default function ListButton({
  isSidebarOpen,
  setIsSidebarOpen,
}: ListButtonProps) {
  return (
    <Tooltip title="List">
      <IconButton
        css={[
          listbutton,
          css({
            animation: isSidebarOpen
              ? `${fadeOutAnimation} 0.5s forwards`
              : `${fadeInAnimation} 0.5s forwards`,
          }),
        ]}
        onClick={() => setIsSidebarOpen(true)}
      >
        <FormatListBulletedIcon />
      </IconButton>
    </Tooltip>
  );
}
