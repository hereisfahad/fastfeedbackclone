import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';

import Feedback from '@/components/Feedback';
import { useAuth } from '@/lib/auth';
import { createFeedback } from '@/lib/db';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback
    }
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
}

const FeedbackPage = ({ initialFeedback = [] }) => {
  const auth = useAuth();
  const router = useRouter();
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(false)
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: feedback.trim(),
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'Pending'
    };

    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
    setFeedback('')
    setLoading(false)
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="2rem auto"
    >
      {auth.user && (
        <Box as="form" onSubmit={onSubmit} border="1px solid" borderColor="gray.400" rounded="md" px={6}>
          <FormControl my={8}>
            <FormLabel htmlFor="comment">Comment <Text color="red" as="span">*</Text></FormLabel>
            <Input autoFocus focusBorderColor="purple.400" borderColor="purple.400" value={feedback} onChange={(e) => setFeedback(e.target.value)} id="comment" placeholder="Leave a comment" />
            <Button colorScheme="purple" mt={4} type="submit" fontWeight="medium" disabled={!feedback.trim()} isLoading={loading}>
              Add Comment
            </Button>
          </FormControl>
        </Box>
      )}
      {
        allFeedback.map((feedback, index) => (
          <Feedback key={`${feedback.id}_${index}`} {...feedback} />
        ))
      }
    </Box>
  );
};

export default FeedbackPage;
