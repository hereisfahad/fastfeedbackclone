import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"

export default function SiteTable({ sites }) {
  return (
    <Box border="1px solid" borderColor="gray.100" borderRadius="5px" boxShadow="lg" bg="white">
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
            sites.map(({ name, link, createdAt }) => {
              return (
                <Tr>
                  <Td minWidth="150px">{name}</Td>
                  <Td minWidth="150px">{link}</Td>
                  <Td minWidth="310px">{createdAt}</Td>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </Box>
  )
}
