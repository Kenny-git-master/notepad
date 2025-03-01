import { keyframes } from "@emotion/react";

// スライドイン（左から表示）
export const slideInAnimation = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// スライドアウト（左へ非表示）
export const slideOutAnimation = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; }
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
