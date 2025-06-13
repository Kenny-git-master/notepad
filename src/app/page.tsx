/* @jsxImportSource react */
"use client";

import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import ListButton from "./components/elements/sidebar/ListButton";
import Main from "./components/layouts/Main";
// import SubContents from "./components/layouts/SubContents";
import ConfirmModal from "./components/elements/Modal";
import { Memo } from "@/app/constants/interfaces";

import {
  getAllMemos,
  getMemoById,
  saveMemo,
  deleteMemo,
} from "@/app/features/editor/service/IndexedDBManagement";
import { SnackbarContent, Stack } from "@mui/material";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memoList, setMemoList] = useState<Memo[]>([]);
  const [memoId, setMemoId] = useState<string>("");
  const [editedMemo, setEditedMemo] = useState<Memo | null>(null);
  const [fetchedMemo, setFetchedMemo] = useState<Memo | null>(null);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);

  // 全データ取得
  const fetchMemoList = async () => {
    const data = await getAllMemos();
    setMemoList(data);

    if (data.length > 0 && !memoId) {
      setMemoId(data[0].id);
    }
  };

  // IDでデータ取得
  const setMemoById = async (memoId: string) => {
    const data = await getMemoById(memoId);
    setFetchedMemo(data);
  };

  const handleCloseSnackbar = () => {
    setIsOpenSnackbar(false);
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
      if (editedMemo) {
        await saveMemo(editedMemo);
        await fetchMemoList();
      }
    };

    updateMemo();
  }, [editedMemo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpenSnackbar) setIsOpenSnackbar(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpenSnackbar]);

  return (
    <>
      <Header />
      <Stack direction={"row"}>
        {isSidebarOpen ? (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            memos={memoList}
            setMemoId={setMemoId}
            setIsModalOpen={setIsModalOpen}
          />
        ) : (
          <ListButton
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
        <Main
          memoId={memoId}
          setEditedMemo={setEditedMemo}
          fetchedMemo={fetchedMemo}
          setIsOpenSnackbar={setIsOpenSnackbar}
        />
      </Stack>
      {/* <SubContents /> */}

      {isModalOpen && (
        <ConfirmModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onConfirm={() => {
            deleteMemo(memoId);
            fetchMemoList();
            setIsModalOpen(false);
          }}
        />
      )}

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isOpenSnackbar}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContent
          message="saiving..."
          style={{
            borderRadius: "4px",
            backgroundColor: "teal",
          }}
        />
      </Snackbar>
    </>
  );
}
