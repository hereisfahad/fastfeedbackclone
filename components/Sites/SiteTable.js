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
    <Td><Skeleton height="20px" width="275px" /></Td>
  </Tr>
)

export default function SiteTable({ sites, loading = true }) {
  return (
    <Box border="1px solid" borderColor="gray.100" borderRadius="5px" boxShadow="lg">
      <Table variant="simple" w="710px">
        <Thead bg="gray.100">
          <Tr>
            <Th minWidth="150px">Name</Th>
            <Th minWidth="150px">Link</Th>
            <Th minWidth="300px">Created at</Th>
          </Tr>
        </Thead>
        <Tbody color="gray.600">
          {
            loading ? (
              <>
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
              </>
            ) : (
                sites.map(site => {
                  return (
                    <Tr>
                      <Td minWidth="150px">{site.name}</Td>
                      <Td minWidth="150px">{site.link}</Td>
                      <Td minWidth="310px" >{new Date(site.createdAt).toGMTString()}</Td>
                    </Tr>
                  )
                })
              )
          }
        </Tbody>
      </Table>
    </Box>
  )
}
