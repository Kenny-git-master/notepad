import { useState, useEffect } from "react";
import type { Memo } from "@/app/constants/interfaces";

export const useFilteredMemos = (memos: Memo[], searchString: string) => {
  const [filteredMemos, setFilteredMemos] = useState<Memo[]>(memos);

  // 検索ロジック
  useEffect(() => {
    if (searchString.trim() === "") {
      setFilteredMemos(memos);
    } else {
      const result = memos.filter(
        (memo) =>
          memo.title
            .toLocaleLowerCase()
            .includes(searchString.toLocaleLowerCase())
        // memo.title.includes(searchString) ||
        // memo.content.includes(searchString)
      );
      setFilteredMemos(result);
    }
  }, [memos, searchString]);

  return {
    filteredMemos,
  };
};
