import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack,
  Link,
  Text,
  useToast
} from '@chakra-ui/react'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell'
import EmptyState from '@/components/Feedback/EmptyState'
import Table from '@/components/Feedback/Table'
import Placeholder from '@/components/Feedback/Placeholder'
import { fetcher } from '@/utils/fetcher'
import { useAuth } from '@/lib/auth'

const Feedback = () => {
  const toast = useToast()
  const { user, loading, signinWithGithub } = useAuth()
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher)

  if (loading && !user) return <Placeholder />

  if (data?.error) {
    toast({
      status: 'error',
      description: data.error.message,
      isClosable: true,
      duration: 4000
    })
  }

  if (!loading && !user) {
    return (
      <DashboardShell>
        <>
          <Link onClick={signinWithGithub} fontSize="lg">Login</Link>
          <Text color="gray.600" fontSize="lg">To see feedback</Text>
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
                <BreadcrumbLink>Feedback</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading size="md" mb="1rem">
              All Feedback
            </Heading>
          </Stack>
        </Flex>
        {
          data?.feedback?.length === 0 ? <EmptyState /> : <Table allFeedback={data?.feedback || []} />
        }
      </Flex>
    </DashboardShell>
  )
}
export default Feedback
