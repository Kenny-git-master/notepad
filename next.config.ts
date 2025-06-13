import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  // output: 'export' で /xxx.html -> /xxx/index.html で出力し、
  // ルーティングで /xxx/ としてアクセスできるようにする
  trailingSlash: true,
};

export default nextConfig;
