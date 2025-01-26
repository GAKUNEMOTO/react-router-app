import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // SSG設定
  async prerender() {
    return ["/popular"];
  }
} satisfies Config;
