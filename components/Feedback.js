
import { formatDate } from '@/utils/helperFunctions';
import { Box, Heading, Text } from '@chakra-ui/react';

const Feedback = ({ author, text, createdAt }) => (
  <Box bg="white" maxWidth="700px" w="full" border="1px solid" borderColor="gray.400" rounded="md" px={6} py={4} mt={4}>
    <Heading size="sm" as="h3" mb={0} color="gray.900" fontWeight="medium">
      {author}
    </Heading>
    <Text color="gray.500" mb={4} fontSize="xs">
      {formatDate(createdAt)}
    </Text>
    <Text color="gray.800">{text}</Text>
  </Box>
);

export default Feedback;
