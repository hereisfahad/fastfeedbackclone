import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack,
  Link,
  Text,
} from '@chakra-ui/react'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell'
import SiteEmptyState from '@/components/Sites/SiteEmptyState'
import AddSiteModal from '@/components/Sites/AddSiteModal'
import SiteTable from '@/components/Sites/SiteTable'
import Placeholder from '@/components/Sites/Placeholder'
import { fetcher } from '@/utils/fetcher'
import { useAuth } from '@/lib/auth'

const Sites = () => {
  const { user, loading, signinWithGithub } = useAuth()
  const { data } = useSWR('/api/sites', fetcher)

  if (loading && !user) return <Placeholder />

  if (!loading && !user) {
    return (
      <DashboardShell>
        <>
          <Link onClick={signinWithGithub} fontSize="lg">Login</Link>
          <Text color="gray.600" fontSize="lg">To see your sites</Text>
        </>
      </DashboardShell>
    )
  }

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
          data?.sites.length === 0 ? <SiteEmptyState /> : <SiteTable sites={data?.sites || []} />
        }
      </Flex>
    </DashboardShell>
  )
}
export default Sites
