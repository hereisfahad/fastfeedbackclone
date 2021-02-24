import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';

import DashboardShell from '@/components/DashboardShell'
import Feedback from '@/components/Feedback';
import { useAuth } from '@/lib/auth';
import { createFeedback } from '@/lib/db';
import { getAllFeedback, getAllSites, getSite } from '@/lib/db-admin';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  const { site } = await getSite(siteId)
  return {
    props: {
      initialFeedback: feedback,
      site
    },
    revalidate: 60,
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
    fallback: true
  };
}

const FeedbackPage = ({ initialFeedback = [], site }) => {
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
      isVisible: false,
      isDeleted: false
    };

    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
    setFeedback('')
    setLoading(false)
  };

  return (
    <DashboardShell>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="2rem auto"
      >
        {auth.user && (
          <Box as="form" bg="white" onSubmit={onSubmit} border="1px solid" borderColor="gray.400" rounded="md" p={4}>
            <FormControl>
              <FormLabel htmlFor="comment">Comment <Text color="red" as="span">*</Text></FormLabel>
              <Input autoFocus focusBorderColor="purple.400" borderColor="purple.400" color="gray.900" value={feedback} onChange={(e) => setFeedback(e.target.value)} id="comment" placeholder="Leave a comment" />
              <Button colorScheme="purple" mt={4} type="submit" fontWeight="medium" disabled={!feedback.trim()} isLoading={loading}>
                Add Comment
              </Button>
            </FormControl>
          </Box>
        )}
        {
          allFeedback.map((feedback, index) => (
            <Feedback key={`${feedback.id}_${index}`} {...feedback} settings={site?.settings} />
          ))
        }
      </Box>
    </DashboardShell>
  );
};

export default FeedbackPage;
