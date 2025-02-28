import { Center } from "@chakra-ui/react";
import Link from "next/link";
import { css } from "@emotion/react";

type Navigation = {
  text: string;
  href: string;
};

const link = css({
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function Header() {
  const navigations: Navigation[] = [
    { text: "Overview", href: "" },
    { text: "Features", href: "" },
    { text: "Privacy & Security", href: "" },
    { text: "Contact", href: "" },
  ];

  return (
    <Center gap="20px">
      {navigations.map((nav, index) => (
        <Link css={link} key={index} href={nav.href}>
          {nav.text}
        </Link>
      ))}
    </Center>
  );
}
