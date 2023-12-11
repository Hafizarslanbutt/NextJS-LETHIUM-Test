import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Inter } from 'next/font/google'
import { GlobalStyles } from "../styles/GlobalStyles"; // Assuming you have a global styles file

const theme = {
  // Your theme variables
};

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <main className={inter.className}>
      <GlobalStyles />
      <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
