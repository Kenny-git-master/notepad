import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";

import { subContents } from "../../constants/subcontents";

export default function SubContents() {
  const wrapper = css({
    width: "60%",
    margin: "auto",
    paddingTop: "50px",
  });

  return (
    <Box>
      {subContents.map((content, index) => (
        <section id={content.id} key={index} css={wrapper}>
          <Typography>{content.title}</Typography>
          <Typography>{content.text}</Typography>
        </section>
      ))}
    </Box>
  );
}
