import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "app",
  ssr: false,
  async prerender() {
    return [
      "/",
      "/about",
      "/taskverse",
      "/insights",
      "/contact",
      "/privacy",
      "/terms",
    ];
  },
} satisfies Config;
