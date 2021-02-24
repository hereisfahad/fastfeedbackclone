import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch
} from "@chakra-ui/react"

import { useAuth } from "@/lib/auth"
import DeleteButton from "./DeleteButton"
import { formatDate } from "@/utils/helperFunctions"

export default function FeedbackTable({ allFeedback }) {
  const { user } = useAuth()

  const updateFeedbackStatus = async (id, isVisible) => {
    const feedBackData = { isVisible: !isVisible }
    const res = await fetch(`api/feedback/${id}`, {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json', token: user.token }),
      credentials: 'same-origin',
      body: JSON.stringify(feedBackData)
    })
    await res.json()
  }

  return (
    <Box border="1px solid" borderColor="gray.100" borderRadius="5px" boxShadow="lg" bg="white">
      <Table variant="simple" w="710px">
        <Thead bg="gray.100">
          <Tr>
            <Th minWidth="150px">Name</Th>
            <Th minWidth="150px">Feedback</Th>
            <Th minWidth="150px">Site Name</Th>
            <Th minWidth="100px">Visible</Th>
            <Th minWidth="300px">Added at</Th>
            <Th minWidth="100px">{''}</Th>
          </Tr>
        </Thead>
        <Tbody color="gray.600">
          {
            allFeedback.map(({ id, author, text, siteName, isVisible, isDeleted, createdAt }) => {
              return (
                <Tr key={id} >
                  <Td minWidth="150px">{author}</Td>
                  <Td minWidth="150px">{text}</Td>
                  <Td minWidth="150px">{siteName}</Td>
                  <Td minWidth="100px">
                    <Switch
                      id="email-alerts"
                      colorScheme="purple"
                      defaultChecked={isVisible}
                      isDisabled={isDeleted}
                      onChange={() => updateFeedbackStatus(id, isVisible)}
                    />
                  </Td>
                  <Td minWidth="300px">{formatDate(createdAt)}</Td>
                  <Th minWidth="100px"><DeleteButton feedbackId={id} isDisabled={isDeleted} /></Th>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </Box>
  )
}
