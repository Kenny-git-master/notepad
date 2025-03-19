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

const card = (isSelected: boolean) =>
  css({
    padding: "10px",
    borderBottom: `1px solid ${COLORS.BORDER}`,
    backgroundColor: isSelected ? COLORS.SELECTED_LIST : "transparent",
    "&:hover": {
      backgroundColor: isSelected ? "" : COLORS.PRIMARY_LIGHT,
    },
  });

const list = css({
  height: "calc(100vh - 174px) ",
  overflowY: "scroll",
});

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  memos,
  setMemoId,
}: SidebarProps) {
  const [animation, setAnimation] = useState(css({ display: "none" }));
  const [searchString, setSearchString] = useState<string>("");
  const [selectedMemoId, setSelectedMemoId] = useState<string | null>(null);

  const { filteredMemos } = useFilteredMemos(memos, searchString);

  const sidebar = css({
    width: "250px",
    height: "calc(100vh - 50px) ",
    borderTop: `1px solid ${COLORS.WHITE}`,
    borderRight: `1px solid ${COLORS.BORDER}`,
  });

  const selectId = (memoId: string) => {
    setMemoId(memoId);
    setSelectedMemoId(memoId);
  };

  // Sidebarの開閉字にアニメーション実施
  useEffect(() => {
    if (isSidebarOpen) {
      setAnimation(css({ animation: `${slideInAnimation} 0.3s forwards` }));
    } else {
      setAnimation(css({ animation: `${slideOutAnimation} 0.3s forwards` }));
    }
  }, [isSidebarOpen]);

  return (
    <Flex direction="column" css={[sidebar, animation]}>
      <aside>
        <SidebarHeader onClose={() => setIsSidebarOpen(false)} />
        <Search onValueChange={(value: string) => setSearchString(value)} />
        <div css={list}>
          {filteredMemos.map((item, index) => {
            const isSelected = selectedMemoId === item.id;
            return (
              <Box
                key={index}
                css={card(isSelected)}
                onClick={() => selectId(item.id)}
              >
                <div>
                  <Text fontWeight="bold">{item.title}</Text>
                  <Text textStyle="sm" truncate color={COLORS.TEXT}>
                    {JSON.stringify(item.content?.ops[0].insert)}
                  </Text>
                </div>
              </Box>
            );
          })}
        </div>
      </aside>

      <CustomButton />
    </Flex>
  );
}
