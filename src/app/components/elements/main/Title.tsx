import { Box, Input } from "@chakra-ui/react";
import { COLORS } from "../../../styles/theme";

export default function Title() {
  return (
    <Box>
      <Input
        px="4"
        mb="8"
        placeholder="Title"
        rounded={0}
        borderColor={COLORS.BORDER}
      />
    </Box>
  );
}
