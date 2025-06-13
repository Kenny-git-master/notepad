import { useState } from "react";
import { css } from "@emotion/react";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { COLORS } from "../../styles/theme";
// import { slideInAnimation, slideOutAnimation } from "@/app/styles/animations";
import { SidebarProps } from "@/app/constants/interfaces";

import CustomButton from "../elements/sidebar/Button";
import SidebarHeader from "../elements/sidebar/SidebarHeader";
import Search from "../elements/sidebar/Search";
import { useFilteredMemos } from "@/app/features/sidebar/hooks/useFilteredMemo";
import { Divider } from "@mui/material";
import { getUniqueStr } from "@/app/utils/createId";

export default function Sidebar({
  // isSidebarOpen,
  setIsSidebarOpen,
  memos,
  setMemoId,
  setIsModalOpen,
}: SidebarProps) {
  // const [animation, setAnimation] = useState(css({ display: "none" }));
  const [searchString, setSearchString] = useState<string>("");
  const [selectedMemoId, setSelectedMemoId] = useState<string | null>(null);

  const { filteredMemos } = useFilteredMemos(memos, searchString);

  const title = css({
    fontWeight: "var(--font-weight-semibold)",
  });

  const sidebar = css({
    width: "250px",
    height: "calc(100vh - 50px) ",
    marginTop: "50px",
    borderTop: `1px solid ${COLORS.WHITE}`,
    borderRight: `1px solid ${COLORS.BORDER}`,
    position: "relative",
  });

  const deleteIcon = css({
    color: COLORS.PRIMARY_DARK,
    "&:hover": {
      color: COLORS.WARNING,
    },
  });

  const card = (isSelected: boolean) =>
    css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      borderBottom: `1px solid ${COLORS.BORDER}`,
      backgroundColor: isSelected ? COLORS.SELECTED_LIST : "transparent",
      "&:hover": {
        backgroundColor: isSelected ? "" : COLORS.PRIMARY_LIGHT,
      },
    });

  const list = css({
    height: "calc(100vh - 201px) ",
    overflowY: "scroll",
  });

  const ellipsis = css({
    fontSize: "var(--font-size-xs)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "190px",
  });

  const selectId = (memoId: string) => {
    setMemoId(memoId);
    setSelectedMemoId(memoId);
  };

  const deleteMemo = (memoId: string) => {
    setMemoId(memoId);
    setIsModalOpen(true);
  };

  const handleCreateNewMemo = () => {
    const newId = getUniqueStr();
    setMemoId(newId);
  };

  // Sidebarの開閉字にアニメーション実施
  // useEffect(() => {
  //   if (isSidebarOpen) {
  //     setAnimation(css({ animation: `${slideInAnimation} 0.3s forwards` }));
  //   } else {
  //     setAnimation(css({ animation: `${slideOutAnimation} 0.3s forwards` }));
  //   }
  // }, [isSidebarOpen]);

  return (
    <>
      <aside css={sidebar}>
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
                <Box>
                  <Typography css={title}>{item.title}</Typography>
                  <Typography color={COLORS.TEXT} css={ellipsis}>
                    {JSON.stringify(
                      item.content?.ops
                        .map((op) => op.insert)
                        .join("")
                        .replace(/\n/g, " ")
                    )}
                  </Typography>
                </Box>
                <DeleteIcon
                  css={deleteIcon}
                  onClick={() => deleteMemo(item.id)}
                />
              </Box>
            );
          })}
        </div>
        <Divider />
        <CustomButton onClick={handleCreateNewMemo} />
      </aside>
    </>
  );
}
