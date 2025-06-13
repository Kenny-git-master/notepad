import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { css } from "@emotion/react";
import { SearchProps } from "@/app/constants/interfaces";
import { Divider } from "@mui/material";

const search = css({
  margin: "15px 5px",
});

export default function Search({ onValueChange }: SearchProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onValueChange(value);
  };

  return (
    <>
      <TextField
        css={search}
        placeholder="Search Title"
        variant="standard"
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        onChange={handleInputChange}
      />
      <Divider />
    </>
  );
}
