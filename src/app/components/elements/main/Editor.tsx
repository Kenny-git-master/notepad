import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { css } from "@emotion/react";
// import { Tooltip } from "@chakra-ui/react";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  // [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["clean"], // remove formatting button
];

const el = document.querySelector(".ql-bold");
el?.addEventListener("mouseover", () => {
  console.log("aaa");
});
// const quill = document.querySelector(".ql-toolbar");
// if (quill) {
//   const toolbarIcons = quill.querySelectorAll(".ql-format-group button");

//   toolbarIcons.forEach((icon) => {
//     const label = icon.getAttribute("aria-label");
//     if (label) {
//       const tooltip = document.createElement("div");
//       tooltip.classList.add("chakra-tooltip");
//       tooltip.setAttribute("data-tooltip", label);
//       icon.parentElement?.appendChild(tooltip);
//     }
//   });
// }

/**
 *
 * @param className : クラス名
 * @description Add tooltips to Quill header icons
 */
// const addTooltip = (className: string) => {
//   const el = document.querySelector(className);
//   const label = el?.getAttribute("aria-label");
// };

export default function Editor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<Quill | null>(null);
  const [toolbarHeight, setToolbarHeight] = useState<number>(40);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!editorRef.current || quill) return;

    if (!isMounted.current) {
      // Quillインスタンスの生成
      const quillInstance = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
      });
      setQuill(quillInstance);

      // Quillヘッダーの高さ取得
      const toolbarElement = document.querySelector(".ql-toolbar");
      if (toolbarHeight) setToolbarHeight(toolbarElement!.clientHeight);

      // const toolbarIcons = document.querySelectorAll(".ql-toolbar button");
      // toolbarIcons.forEach((icon) => {
      //   const label = icon.getAttribute("aria-label");
      //   if (label) {
      //     const tooltip = document.createElement("div");
      //     tooltip.classList.add("chakra-tooltip");
      //     tooltip.textContent = label;
      //     icon.parentElement?.appendChild(tooltip);
      //   }
      // });
      isMounted.current = true;
    }
  }, [quill, toolbarHeight]);

  const qlEditor = css({
    // Height: 100vh - Header(50px) - Title(72px) - paddingX(40px) - quillHeader
    maxHeight: `calc(100vh - 50px - 72px - 40px - 85px) `,
    overflowY: "scroll",
  });

  return (
    <div>
      <div ref={editorRef} css={qlEditor} />
    </div>
  );
}
