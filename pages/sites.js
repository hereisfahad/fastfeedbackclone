import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack
} from '@chakra-ui/react'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell'
import SiteEmptyState from '@/components/Sites/SiteEmptyState'
import AddSiteModal from '@/components/Sites/AddSiteModal'
import SiteTable from '@/components/Sites/SiteTable'
import { fetcher } from '@/utils/fetcher'

const Sites = () => {
  const { data } = useSWR('/api/sites', fetcher)

  return (
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
          data?.sites.length === 0 ? <SiteEmptyState /> : <SiteTable loading={!data} sites={data?.sites} />
        }
      </Flex>
    </DashboardShell>
  )
}

export default Sites
