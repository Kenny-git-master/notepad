import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../elements/main/Editor"), {
  ssr: false,
});
import { Box } from "@chakra-ui/react";

// import Editor from "../elements/main/Editor";
import Title from "../elements/main/Title";

export default function Main() {
  return (
    <Box
      width="100%"
      maxW="100vh"
      mx="auto"
      my="20px"
      transition="width 0.3s ease-in-out"
    >
      <Title />
      <Editor />
    </Box>
  );
}
