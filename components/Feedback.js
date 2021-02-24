
import { formatDate } from '@/utils/helperFunctions';
import { Box, Flex, Heading, Tag, Text } from '@chakra-ui/react';

const Feedback = ({ author, text, createdAt, provider, settings = { icons: true, timestamp: true, ratings: false } }) => (
  <Box bg="white" maxWidth="700px" w="full" border="1px solid" borderColor="gray.400" rounded="md" px={6} py={4} mt={4}>
    <Flex>
      <Heading size="sm" as="h3" mb={0} mr={2} color="gray.900" fontWeight="medium">
        {author}
      </Heading>
      {settings?.icons && <Tag>{provider.slice(0, -4)} user</Tag>}
    </Flex>
    {
      settings?.timestamp && (
        <Text color="gray.500" mb={4} fontSize="xs">
          {formatDate(createdAt)}
        </Text>
      )
    }
    <Text color="gray.800">{text}</Text>
  </Box>
);

export default Feedback;
