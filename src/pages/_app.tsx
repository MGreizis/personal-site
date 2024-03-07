import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { ThemeProvider } from "next-themes";

import { Analytics } from "@vercel/analytics/react"

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
