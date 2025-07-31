// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
// import '../node_modules/@mui/x-data-grid/esm/DataGrid/index.js'



export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </QueryClientProvider>
    </>
  );
}
