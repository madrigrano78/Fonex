import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
