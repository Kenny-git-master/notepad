/* @jsxImportSource react */
"use client";

import { useState } from "react";

import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import ListButton from "./components/elements/sidebar/ListButton";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <Header />
      {!isSidebarOpen && (
        <ListButton
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main></main>
    </div>
  );
}
