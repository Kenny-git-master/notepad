import dynamic from "next/dynamic";
import { Delta } from "quill";
import { useState, useEffect } from "react";
import { getUniqueStr } from "@/app/utils/createId";
import { Box } from "@chakra-ui/react";

import Title from "../elements/main/Title";
import { Memo } from "@/app/constants/interfaces";

const Editor = dynamic(() => import("../elements/main/Editor"), {
  ssr: false,
});

export default function Main({
  memoId,
  seteditedMemo,
  fetchedMemo,
}: {
  memoId?: string;
  seteditedMemo: (value: Memo) => void;
  fetchedMemo: Memo | null;
}) {
  // title
  const [id, setId] = useState<string>(memoId || getUniqueStr());
  const [title, setTitle] = useState<string>(fetchedMemo?.title || "No Title");
  const [content, setContent] = useState<Delta | null>(null);

  const memo: Memo = {
    id,
    title,
    content,
    date: new Date(),
  };

  const save = () => {
    if (title || content) seteditedMemo(memo);
  };

  useEffect(() => {
    if (!fetchedMemo) return;

    const timer = setTimeout(() => {
      save();
    }, 3000);

    // 変更があるたびに前回の `setTimeout` をクリア
    return () => clearTimeout(timer);
  }, [title, content]);

  // memoId の変更を検知して fetchedMemo を適用
  useEffect(() => {
    if (fetchedMemo) {
      setId(fetchedMemo.id);
      setTitle(fetchedMemo.title);
      setContent(fetchedMemo.content);
    }
  }, [fetchedMemo]);

  return (
    <Box
      width="100%"
      maxW="100vh"
      mx="auto"
      my="20px"
      transition="width 0.3s ease-in-out"
    >
      <Title onValueChange={setTitle} title={title} />
      <Editor onValueChange={setContent} content={content} />
    </Box>
  );
}
