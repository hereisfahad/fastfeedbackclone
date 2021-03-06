import {
  Flex,
} from '@chakra-ui/react'

import Navbar from '@/components/Navbar'

const DashboardShell = ({ children }) => {
  return (
    <>
      <Flex
        color="purple.500"
        justifyContent="flex-start"
        backgroundColor="gray.50"
        minHeight="100vh"
        flexDirection="column"
        bgGradient="radial(gray.200, purple.50)"
      >
        <Navbar />
        <Flex
          color="purple.500"
          justifyContent="flex-start"
          height="100vh"
          flexDirection="column"
          ml="auto"
          mr="auto"
          width="100%"
          alignItems="center"
          mt="4rem"
        >
          {children}
        </Flex>
      </Flex>
    </>
  )
}

export default DashboardShell