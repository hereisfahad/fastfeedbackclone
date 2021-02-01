import Head from 'next/head'
import { Heading, Text, Button } from '@chakra-ui/react'

import { useAuth } from '@/lib/auth'

const Home = () => {
  const { user, signinWithGithub, signout } = useAuth()
  return (
    <div >
      <Head>
        <title>FastFeedback Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Heading>Welcome to Fast Feedback Clone</Heading>
        {
          user ? (
            <>
              <Button onClick={signout}>Signout</Button>
              <Text>Logged in as {user.name} ({user.email})</Text>
            </>
          ) : <Button onClick={signinWithGithub}>Signin</Button>
        }
      </main>
    </div>
  )
}

export default Home