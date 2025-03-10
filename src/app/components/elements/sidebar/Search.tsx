import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import SearchIcon from "@mui/icons-material/Search";
import { css } from "@emotion/react";

const search = css({
  width: "100%",
});
const searchIcon = css({
  marginLeft: "8px",
  paddingRight: "4px",
});

export default function Search() {
  return (
    <InputGroup startElement={<SearchIcon css={searchIcon} />} css={search}>
      <Input
        _focus={{
          boxShadow: "none",
        }}
        variant="flushed"
        placeholder="Search..."
      />
    </InputGroup>
  );
}
