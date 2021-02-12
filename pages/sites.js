import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack
} from '@chakra-ui/react'

import DashboardShell from '@/components/DashboardShell'
import SiteEmptyState from '@/components/Sites/SiteEmptyState'
import AddSiteModal from '@/components/Sites/AddSiteModal'

const Sites = () => (
  <DashboardShell>
    <Flex flexDirection="column">
      <Flex justifyContent="space-between" alignItems="center">
        <Stack>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading size="md" mb="1rem">
            My Sites
          </Heading>
        </Stack>
        <AddSiteModal buttonText="Add site" />
      </Flex>
      <SiteEmptyState />

    </Flex>
  </DashboardShell>
)

export default Sites
