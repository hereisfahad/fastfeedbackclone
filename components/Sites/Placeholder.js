import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack,
  Skeleton
} from '@chakra-ui/react'

import DashboardShell from '@/components/DashboardShell'
import AddSiteModal from '@/components/Sites/AddSiteModal'
import SiteTableSkeleton from '@/components/Sites/SiteTableSkeleton'

const Placeholder = () => {
  return (
    <DashboardShell>
      <Flex flexDirection="column">
        <Flex justifyContent="space-between" alignItems="center">
          <Stack>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink><Skeleton>Sites</Skeleton></BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading size="md" mb="1rem">
              <Skeleton>My Sites</Skeleton>
            </Heading>
          </Stack>
          <Skeleton>
            <AddSiteModal buttonText="Add site" />
          </Skeleton>
        </Flex>
        <SiteTableSkeleton />
      </Flex>
    </DashboardShell>
  )
}

export default Placeholder
