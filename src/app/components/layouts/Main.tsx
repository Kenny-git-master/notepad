import dynamic from "next/dynamic";
import { css } from "@emotion/react";
import { Delta } from "quill";
import { useState, useEffect, useCallback, useMemo } from "react";
import { getUniqueStr } from "@/app/utils/createId";
import Box from "@mui/material/Box";

import Title from "../elements/main/Title";
import { Memo } from "@/app/constants/interfaces";

const Editor = dynamic(() => import("../elements/main/Editor"), {
  ssr: false,
});

const wrapper = css({
  margin: "74px auto",

  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

type MainType = {
  memoId?: string;
  setEditedMemo: (value: Memo) => void;
  fetchedMemo: Memo | null;
  setIsOpenSnackbar: (value: boolean) => void;
};

export default function Main({
  memoId,
  setEditedMemo,
  fetchedMemo,
  setIsOpenSnackbar,
}: MainType) {
  const [id, setId] = useState<string>(memoId || getUniqueStr());
  const [title, setTitle] = useState<string>(fetchedMemo?.title || "No Title");
  const [content, setContent] = useState<Delta | null>(null);

  const memo = useMemo<Memo>(
    () => ({
      id,
      title,
      content,
      date: new Date(),
    }),
    [id, title, content]
  );

  const save = useCallback(() => {
    if (title || content) setEditedMemo(memo);
  }, [title, content, setEditedMemo, memo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenSnackbar(true);
      save();
    }, 2000);

    // 変更があるたびに前回の `setTimeout` をクリア
    return () => clearTimeout(timer);
  }, [title, content, setIsOpenSnackbar, save]);

  // memoId の変更を検知して fetchedMemo を適用
  useEffect(() => {
    if (fetchedMemo) {
      setId(fetchedMemo.id);
      setTitle(fetchedMemo.title);
      setContent(fetchedMemo.content);
    } else if (memoId) {
      setId(memoId);
      setTitle("No Title");
      setContent(null);
    }
  }, [fetchedMemo, memoId]);

  return (
    <Box css={wrapper}>
      <Title
        onValueChange={(val) => {
          setTitle(val);
        }}
        title={title}
      />
      <div>
        <Editor
          onValueChange={(val) => {
            setContent(val);
          }}
          content={content}
        />
      </div>
    </Box>
  );
}
