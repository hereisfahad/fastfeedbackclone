import {
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react'

const SiteEmptyState = () => (
  <Flex
    flexDirection="column"
    border="1px solid purple"
    borderRadius="8px"
    shadow={["none", "md", "lg"]}
    backgroundColor="white"
    width={["auto", "400px", "600px"]}
    minWidth="300px"
    minHeight="200px"
    p={8}
    justifyContent="flex-start"
    alignItems="center"
  >
    <Heading size="md">No site found.</Heading>
    <Text>Grow with us.</Text>
  </Flex>
)

export default SiteEmptyState
