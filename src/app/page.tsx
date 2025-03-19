/* @jsxImportSource react */
"use client";

import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import ListButton from "./components/elements/sidebar/ListButton";
import Main from "./components/layouts/Main";
import SubContents from "./components/layouts/SubContents";
import { Memo } from "@/app/constants/interfaces";

import {
  getAllMemos,
  getMemoById,
  saveMemo,
} from "@/app/features/editor/service/IndexedDBManagement";

type ToasterType = "success" | "error" | "warning" | "info";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [memoList, setMemoList] = useState<Memo[]>([]);
  const [memoId, setMemoId] = useState<string>("");
  const [editedMemo, seteditedMemo] = useState<Memo | null>(null);
  const [fetchedMemo, setFetchedMemo] = useState<Memo | null>(null);

  const showToaster = (type: ToasterType, description: string) => {
    toaster.create({
      description: description,
      type: type,
      duration: 3000,
    });
  };

  // 全データ取得
  const fetchMemoList = async () => {
    const data = await getAllMemos();
    setMemoList(data);
  };

  // IDでデータ取得
  const setMemoById = async (memoId: string) => {
    const data = await getMemoById(memoId);
    setFetchedMemo(data);
  };

  /** useEffect ------------------------------------------------- */
  // Listクリックで対象メモを画面に表示
  useEffect(() => {
    setMemoById(memoId);
  }, [memoId]);

  useEffect(() => {
    // マウント時にIndexedDBから取得
    fetchMemoList();
  }, []);

  // メモ更新
  useEffect(() => {
    const updateMemo = async () => {
      toaster.dismiss();
      showToaster("info", "Now Saving...");

      if (editedMemo) {
        toaster.dismiss();
        await saveMemo(editedMemo);
        await fetchMemoList();
        showToaster("success", "Saved");
      }
    };
    updateMemo();
  }, [editedMemo]);

  return (
    <>
      <Header />
      <Flex pt="50px">
        {!isSidebarOpen && (
          <ListButton
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          memos={memoList}
          setMemoId={setMemoId}
        />
        <Flex flex="1" px="20" py="5">
          <Main
            memoId={memoId}
            seteditedMemo={seteditedMemo}
            fetchedMemo={fetchedMemo}
          />
        </Flex>
      </Flex>
      <SubContents />
      <Toaster />
    </>
  );
}
