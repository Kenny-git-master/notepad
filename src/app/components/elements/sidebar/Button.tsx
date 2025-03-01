import { Button, Stack, Text, Center } from "@chakra-ui/react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { css } from "@emotion/react";
import { COLORS } from "../../../styles/theme";

const button = css({
  backgroundColor: COLORS.ACCENT,
  padding: "5px 30px",
  margin: "10px",
  bottom: "0",
  position: "absolute",
});

export default function CustomButton() {
  return (
    <Stack>
      <Center>
        <Button css={button}>
          <Text textStyle="lg" fontWeight="semibold">
            Create New
          </Text>
          <ControlPointIcon />
        </Button>
      </Center>
    </Stack>
  );
}
