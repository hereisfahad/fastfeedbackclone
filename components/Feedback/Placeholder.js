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
import TableSkeleton from './TableSkeleton'

const Placeholder = () => {
  return (
    <DashboardShell>
      <Flex flexDirection="column">
        <Flex justifyContent="space-between" alignItems="center">
          <Stack>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink><Skeleton>Feedbacks</Skeleton></BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading size="md" mb="1rem">
              <Skeleton>My Feedback</Skeleton>
            </Heading>
          </Stack>
        </Flex>
        <TableSkeleton />
      </Flex>
    </DashboardShell>
  )
}

export default Placeholder
