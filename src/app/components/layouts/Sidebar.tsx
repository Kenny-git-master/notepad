import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Flex, Text, Box } from "@chakra-ui/react";

import { COLORS } from "../../styles/theme";
import { slideInAnimation, slideOutAnimation } from "@/app/styles/animations";
import { SidebarProps } from "@/app/constants/interfaces";

import CustomButton from "../elements/sidebar/Button";
import SidebarHeader from "../elements/sidebar/SidebarHeader";
import Search from "../elements/sidebar/Search";

const listItems = [
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
  {
    title: "Test Memo",
    content:
      "One point must not be omitted, namely, the homogeny of the endostyle of Amphioxus and the thyroid gland of Craniata.",
  },
];

const sidebar = css({
  width: "250px",
  height: "calc(100vh - 50px) ",
  borderTop: `1px solid ${COLORS.WHITE}`,
  borderRight: `1px solid ${COLORS.BORDER}`,
});

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
  const [animation, setAnimation] = useState(css({ display: "none" }));

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
        <Search />
        <div css={list}>
          {listItems.map((item, index) => (
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
