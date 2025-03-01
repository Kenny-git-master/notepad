// import React from "react";
import { SITE_TITLE } from "@/app/constants/siteConfig";
import { COLORS } from "../../styles/theme";
import Navigation from "@/app/components/elements/Navigation";
import { Heading, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";

const header = css({
  height: "50px",
  backgroundColor: COLORS.PRIMARY,
  color: COLORS.WHITE,
  padding: "5px 20px",
});

export default function Header() {
  return (
    <header css={header}>
      <Flex justify="space-between" bg="brand.100">
        <Heading size="3xl">
          <a href="">{SITE_TITLE}</a>
        </Heading>

        <Navigation />
      </Flex>
    </header>
  );
}
