/* @jsxImportSource react */
"use client";

import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import ListButton from "./components/elements/sidebar/ListButton";
import Main from "./components/layouts/Main";
import SubContents from "./components/layouts/SubContents";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
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
        />
        <Flex flex="1" px="20" py="5">
          <Main />
        </Flex>
      </Flex>
      <SubContents />
    </div>
  );
}
