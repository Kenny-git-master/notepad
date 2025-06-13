// import React from "react";
import { SITE_TITLE } from "@/app/constants/siteConfig";
import { COLORS } from "../../styles/theme";
import Navigation from "@/app/components/elements/Navigation";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";

const header = css({
  height: "50px",
  width: "100vw",
  backgroundColor: COLORS.PRIMARY,
  color: COLORS.WHITE,
  padding: "5px 30px",
  position: "fixed",
  zIndex: "100",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const title = css({
  fontSize: "var(--font-size-3xl)",
  fontWeight: "var(--font-weight-bold)",
});

export default function Header() {
  return (
    <header css={header}>
      <Typography css={title}>
        <a href="#">{SITE_TITLE}</a>
      </Typography>

      <Navigation />
    </header>
  );
}
