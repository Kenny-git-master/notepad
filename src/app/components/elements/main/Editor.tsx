import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { css } from "@emotion/react";
import { MemoContent } from "@/app/constants/interfaces";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ align: [] }],
  ["clean"], // remove formatting button
  ["markdown"],
];

export default function Editor({ onValueChange, content }: MemoContent) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<Quill | null>(null);

  const isMounted = useRef(false);

  const icons = Quill.import("ui/icons") as Record<string, string>;
  icons["markdown"] = `
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M7 15v-6l2 2l2 -2v6" />
      <path d="M14 13l2 2l2 -2m-2 2v-6" />
    </svg>
  `;

  useEffect(() => {
    if (!editorRef.current || quill) return;

    if (!isMounted.current) {
      const quillInstance = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              markdown: function () {
                console.log("markdown");
              },
            },
          },
        },
      });

      setQuill(quillInstance);

      isMounted.current = true;

      quillInstance.on("text-change", () => {
        const editorContent = quillInstance.getContents();
        if (editorContent) onValueChange(editorContent);
      });
    }
  }, []);
  // }, [quill, onValueChange]);

  useEffect(() => {
    if (quill) {
      if (content && content.ops.length > 0) {
        const currentContent = quill.getContents();
        if (JSON.stringify(currentContent) !== JSON.stringify(content)) {
          quill.setContents(content);
        }
      } else {
        quill.setText("");
      }
    }
  }, [content, quill]);

  const qlEditor = css({
    // Height: 100vh - Header(50px) - Title(72px) - paddingX(40px) - quillHeader
    maxHeight: `calc(100vh - 50px - 72px - 40px - 85px) `,
    overflowY: "scroll",
  });

  return (
    <>
      <div ref={editorRef} css={qlEditor} />
    </>
  );
}
