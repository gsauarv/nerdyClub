import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    fonts: {
      body: "Quicksand",
      heading: "Quicksand",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
