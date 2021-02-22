import { Heading, Text, Flex } from '@chakra-ui/react'

import DashboardShell from '@/components/DashboardShell'

const Home = () => {
  return (
    <DashboardShell>
      <Flex
        flexDirection="column"
        border="1px solid purple"
        borderRadius="8px"
        shadow={["none", "md", "lg"]}
        backgroundColor="white"
        width={["auto", "400px", "600px"]}
        minHeight="200px"
        p={8}
        mx="1rem"
        justifyContent="flex-start"
        alignItems="center"
        userSelect="none"
      >
        <Heading size="md" mb="1rem">Welcome to Fast Feedback Clone</Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </Flex>
    </DashboardShell>
  )
}

export default Home
