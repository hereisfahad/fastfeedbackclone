import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react'

import DashboardShell from '@/components/DashboardShell'

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
      {
        data?.sites.length === 0 ? <SiteEmptyState /> : <SiteTable sites={data?.sites || []} />
      }
    </Flex>
  </DashboardShell>
)

export default Sites
