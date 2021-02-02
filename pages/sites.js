import {
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button
} from '@chakra-ui/react'

import DashboardShell from '@/components/DashboardShell'

const Sites = () => (
  <DashboardShell>
    <Flex flexDirection="column">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink>Sites</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading size="md" mb="1rem">
        My Sites
      </Heading>
      <Flex
        flexDirection="column"
        border="1px solid purple"
        borderRadius="8px"
        backgroundColor="white"
        width="600px"
        minHeight="200px"
        p={8}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Heading size="md">No site found.</Heading>
        <Text>Grow with us.</Text>
        <Button variant="solid" size="md" mt="1rem">
          Add site
        </Button>
      </Flex>
    </Flex>
  </DashboardShell>
)

export default Sites
