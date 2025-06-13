// import { COLORS } from "../../../styles/theme";
import { MemoTitle } from "@/app/constants/interfaces";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Title({ onValueChange, title }: MemoTitle) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onValueChange(value);
  };

  return (
    <Box>
      <TextField
        placeholder="Title"
        size="small"
        onChange={handleInputChange}
        value={title}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#000",
                borderWidth: "1px",
              },
            },
          },
        }}
      />
    </Box>
  );
}
