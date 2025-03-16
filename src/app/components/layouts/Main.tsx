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
  setMemo,
}: {
  memoId?: string;
  setMemo: (value: Memo) => void;
}) {
  // title
  const [id, setId] = useState<string>(memoId || getUniqueStr());
  const [title, setTitle] = useState<string>("No Title");
  const [content, setContent] = useState<Delta | null>(null);

  const memo: Memo = {
    id,
    title,
    content,
    date: new Date(),
  };

  const save = () => {
    if (title || content) setMemo(memo);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      save();
    }, 3000);

    // 変更があるたびに前回の `setTimeout` をクリア
    return () => clearTimeout(timer);
  }, [title, content]);

  return (
    <Box
      width="100%"
      maxW="100vh"
      mx="auto"
      my="20px"
      transition="width 0.3s ease-in-out"
    >
      <Title onValueChange={setTitle} />
      <Editor onValueChange={setContent} />
    </Box>
  );
}
