import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Flex, Text, Box } from "@chakra-ui/react";

import { COLORS } from "../../styles/theme";
import { slideInAnimation, slideOutAnimation } from "@/app/styles/animations";
import { SidebarProps } from "@/app/constants/interfaces";

import CustomButton from "../elements/sidebar/Button";
import SidebarHeader from "../elements/sidebar/SidebarHeader";
import Search from "../elements/sidebar/Search";
import { useFilteredMemos } from "@/app/features/sidebar/hooks/useFilteredMemo";

const listItems = [
  {
    id: "001",
    title: "Test Memo 1",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "002",
    title: "Test Memo 2",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "003",
    title: "Test Memo 3",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "004",
    title: "Test Memo 4",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "005",
    title: "Test Memo 5",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "006",
    title: "Test Memo 6",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "007",
    title: "Test Memo 7",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "008",
    title: "Test Memo 8",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "009",
    title: "Test Memo 9",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    id: "010",
    title: "Test Memo 10",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
];

// const sidebar = css({
//   width: "250px",
//   height: "calc(100vh - 50px) ",
//   borderTop: `1px solid ${COLORS.WHITE}`,
//   borderRight: `1px solid ${COLORS.BORDER}`,
// });

const card = css({
  padding: "10px",
  borderBottom: `1px solid ${COLORS.BORDER}`,
  "&:hover": {
    backgroundColor: COLORS.PRIMARY_LIGHT,
  },
});

const list = css({
  height: "calc(100vh - 174px) ",
  overflowY: "scroll",
});

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  // animation
  const [animation, setAnimation] = useState(css({ display: "none" }));
  // search
  const [searchString, setSearchString] = useState<string>("");
  const { filteredMemos } = useFilteredMemos(listItems, searchString);

  const sidebar = css({
    width: "250px",
    height: "calc(100vh - 50px) ",
    borderTop: `1px solid ${COLORS.WHITE}`,
    borderRight: `1px solid ${COLORS.BORDER}`,
  });

  useEffect(() => {
    if (isSidebarOpen) {
      setAnimation(css({ animation: `${slideInAnimation} 0.3s forwards` }));
    } else {
      setAnimation(css({ animation: `${slideOutAnimation} 0.3s forwards` }));
    }
  }, [isSidebarOpen]);

  return (
    <Flex direction="column" css={[sidebar, animation]}>
      <div>
        <SidebarHeader onClose={() => setIsSidebarOpen(false)} />
        <Search onValueChange={(value: string) => setSearchString(value)} />
        <div css={list}>
          {filteredMemos.map((item, index) => (
            <Box key={index} css={card}>
              <div>
                <Text fontWeight="bold">{item.title}</Text>
                <Text textStyle="sm" truncate color={COLORS.TEXT}>
                  {item.content}
                </Text>
              </div>
            </Box>
          ))}
        </div>
      </div>

      <CustomButton />
    </Flex>
  );
}
