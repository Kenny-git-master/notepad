import { keyframes } from "@emotion/react";

// スライドイン（左から表示）
export const slideInAnimation = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; width: 250px }
`;

// スライドアウト（左へ非表示）
export const slideOutAnimation = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; width: 0 }
`;

// フェードイン
export const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// フェードアウト
export const fadeOutAnimation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// 保存中のアニメーション
export const dotsAnimation = keyframes`
  0% { content: ""; }
  28% { content: "."; }
  56% { content: ".."; }
  82% { content: "..."; }
  100%{ content: ""}
`;
