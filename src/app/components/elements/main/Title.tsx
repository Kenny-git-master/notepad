import { Box, Input } from "@chakra-ui/react";
import { COLORS } from "../../../styles/theme";
import { MemoTitle } from "@/app/constants/interfaces";

export default function Title({ onValueChange, title }: MemoTitle) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onValueChange(value);
  };

  return (
    <Box>
      <Input
        px="4"
        mb="8"
        placeholder="Title"
        rounded={0}
        borderColor={COLORS.BORDER}
        onChange={handleInputChange}
        value={title}
      />
    </Box>
  );
}
