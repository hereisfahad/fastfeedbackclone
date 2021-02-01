import { AuthProvider } from '../lib/auth';
import { ChakraProvider } from "@chakra-ui/react"

import theme from '@/theme/index'
import Fonts from '@/theme/Fonts'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;