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
];

export default function Editor({ onValueChange, content }: MemoContent) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<Quill | null>(null);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!editorRef.current || quill) return;

    if (!isMounted.current) {
      const quillInstance = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
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
