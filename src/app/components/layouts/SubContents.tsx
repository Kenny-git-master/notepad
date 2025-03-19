import { COLORS } from "../../styles/theme";
import { Box, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";

import { subContents } from "../../constants/subcontents";

export default function SubContents() {
  const wrapper = css({
    width: "60%",
    margin: "auto",
    paddingTop: "50px",
  });

  return (
    <Box bg={COLORS.SECONDARY} w="full" textAlign="center" pb="50px">
      {subContents.map((content, index) => (
        <section id={content.id} key={index} css={wrapper}>
          <Text textStyle="4xl" fontWeight="bold" color={COLORS.PRIMARY}>
            {content.title}
          </Text>
          <Text textStyle="md">{content.text}</Text>
        </section>
      ))}
    </Box>
  );
}
