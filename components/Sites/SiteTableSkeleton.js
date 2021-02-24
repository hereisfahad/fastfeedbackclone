import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Skeleton
} from "@chakra-ui/react"

const SkeletonRow = () => (
  <Tr>
    <Td><Skeleton height="20px" width="150px" /></Td>
    <Td><Skeleton height="20px" width="100px" /></Td>
    <Td><Skeleton height="20px" width="100px" /></Td>
    <Td><Skeleton height="20px" width="275px" /></Td>
    <Th><Skeleton height="20px" width="20px" /></Th>
    <Th><Skeleton height="20px" width="20px" /></Th>
  </Tr>
)

export default function SiteTableSkeleton() {
  return (
    <Box border="1px solid" borderColor="gray.100" borderRadius="5px" boxShadow="lg" bg="white">
      <Table variant="simple" w="710px">
        <Thead bg="gray.100">
          <Tr>
            <Th minWidth="150px">Name</Th>
            <Th minWidth="150px">Link</Th>
            <Th minWidth="150px">Feedback Link</Th>
            <Th minWidth="300px">Created at</Th>
            <Th>{''}</Th>
            <Th>{''}</Th>
          </Tr>
        </Thead>
        <Tbody color="gray.600">
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
        </Tbody>
      </Table>
    </Box>
  )
}
