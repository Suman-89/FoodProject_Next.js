// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import Wrapper from "./layout/wrapper/wrapper";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import CssBaseline from "@mui/material/CssBaseline";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <ThemeProvider theme={theme}>
            <Wrapper>
              <CssBaseline />
              <Component {...pageProps} />
            </Wrapper>
          </ThemeProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </>
  );
}
