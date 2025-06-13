import Stack from "@mui/material/Stack";
import Link from "next/link";
import { css } from "@emotion/react";
import type { Navigation } from "@/app/constants/interfaces";

const link = css({
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function Header() {
  const navigations: Navigation[] = [
    { text: "Overview", href: "#Overview" },
    { text: "Features", href: "#Features" },
    { text: "Privacy & Security", href: "#Privacy" },
    { text: "Contact", href: "#Contact" },
  ];

  return (
    <Stack direction="row" spacing={2}>
      {navigations.map((nav, index) => (
        <Link css={link} key={index} href={nav.href}>
          {nav.text}
        </Link>
      ))}
    </Stack>
  );
}
