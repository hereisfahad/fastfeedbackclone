import { formatDate } from "@/utils/helperFunctions";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link
} from "@chakra-ui/react"
import NextLink from 'next/link';
import DeleteButton from "./DeleteButton";
import EditSiteModal from "./EditSiteModal";

export default function SiteTable({ sites }) {
  return (
    <Box border="1px solid" borderColor="gray.100" borderRadius="5px" boxShadow="lg" bg="white">
      <Table variant="simple" w="710px">
        <Thead bg="gray.100">
          <Tr>
            <Th minWidth="150px">Name</Th>
            <Th minWidth="150px">Link</Th>
            <Th minWidth="165px">Feedback Link</Th>
            <Th minWidth="250px">Created at</Th>
            <Th>{''}</Th>
            <Th>{''}</Th>
          </Tr>
        </Thead>
        <Tbody color="gray.600">
          {
            sites.map(({ id, name, link, createdAt, settings }) => {
              return (
                <Tr key={id} >
                  <Td minWidth="150px">{name}</Td>
                  <Td minWidth="150px">{link}</Td>
                  <Td minWidth="165px">
                    <NextLink href="/sites/[siteId]" as={`/sites/${id}`} passHref>
                      <Link color="purple.400">View Feedback</Link>
                    </NextLink>
                  </Td>
                  <Td minWidth="250px">{formatDate(createdAt)}</Td>
                  <Td>{<EditSiteModal settings={settings} siteId={id} />}</Td>
                  <Td>{<DeleteButton siteId={id} />}</Td>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </Box>
  )
}
