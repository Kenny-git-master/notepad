import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import SearchIcon from "@mui/icons-material/Search";
import { css } from "@emotion/react";
import { PassValue } from "@/app/constants/interfaces";

const search = css({
  width: "100%",
});
const searchIcon = css({
  marginLeft: "8px",
  paddingRight: "4px",
});

export default function Search({ onValueChange }: PassValue) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onValueChange(value);
  };

  return (
    <InputGroup startElement={<SearchIcon css={searchIcon} />} css={search}>
      <Input
        _focus={{
          boxShadow: "none",
        }}
        variant="flushed"
        placeholder="Search Title"
        onChange={handleInputChange}
      />
    </InputGroup>
  );
}
