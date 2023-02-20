import { ThemeProvider } from "@mui/material/styles";
import Layout from "@/components/Layout";
import theme from "@/components/Theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
