import { IconButton } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { css } from "@emotion/react";

import { COLORS } from "../../../styles/theme";
import { fadeInAnimation, fadeOutAnimation } from "@/app/styles/animations";
import { ListButtonProps } from "@/app/constants/interfaces";

const listbutton = css({
  position: "absolute",
  margin: "10px",
  backgroundColor: COLORS.ACCENT,
  transition: "opacity 0.3s ease",
  zIndex: 50,
});

export default function ListButton({
  isSidebarOpen,
  setIsSidebarOpen,
}: ListButtonProps) {
  return (
    <Tooltip
      content="List"
      openDelay={100}
      closeDelay={100}
      contentProps={{ px: 4, py: 2, bg: "gray.600" }}
      positioning={{
        placement: "right",
      }}
    >
      <IconButton
        rounded="full"
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
