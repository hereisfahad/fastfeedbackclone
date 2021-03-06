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
    <Td><Skeleton height="20px" width="100px" /></Td>
    <Td><Skeleton height="20px" width="100px" /></Td>
    <Td><Skeleton height="20px" width="100px" /></Td>
    <Td><Skeleton height="20px" width="275px" /></Td>
    <Td><Skeleton height="20px" width="100px" /></Td>
    <Td><Skeleton height="20px" width="50px" /></Td>
  </Tr>
)

export default function TableSkeleton() {
  return (
    <Box border="1px solid" borderColor="gray.100" borderRadius="5px" boxShadow="lg" bg="white">
      <Table variant="simple" maxW="710px">
        <Thead bg="gray.100">
          <Tr>
            <Th minWidth="100px">Name</Th>
            <Th minWidth="100px">Feedback</Th>
            <Th minWidth="100px">Site Name</Th>
            <Th minWidth="100px">Visible</Th>
            <Th minWidth="200px">Added at</Th>
            <Th minWidth="50px">{''}</Th>
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
