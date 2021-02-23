import {
  Flex,
  Stack,
  Link,
  Text,
  Avatar,
  Button,
  Skeleton
} from '@chakra-ui/react'
import { useAuth } from '@/lib/auth'
import NextLink from 'next/link'

import Logo from '@/components/Logo'

const DashboardShell = () => {
  const { user, loading, signinWithGithub, signout } = useAuth()

  return (
    <>
      <Flex
        color="purple.500"
        justifyContent="space-between"
        backgroundColor="white"
        px={8}
        py={2}
        borderBottom="3px solid"
        borderColor="purple.500"
      >
        <Stack
          spacing={2}
          isInline
          justifyContent="flex-start"
          alignItems="center"
        >
          <NextLink href="/" passHref>
            <Link>
              <Logo />
            </Link>
          </NextLink>
          <NextLink href="/sites" passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Stack
          spacing={2}
          isInline
          justifyContent="flex-start"
          alignItems="center"
        >
          {
            loading ? <Skeleton>Username</Skeleton> : (
              user ? (
                <>
                  <Text>{user.name}</Text>
                  <Avatar size="sm" src={user.photoUrl} />
                  <Button onClick={signout} size="xs" colorScheme="red">Signout</Button>
                </>
              ) : <Button onClick={signinWithGithub}>Signin</Button>
            )
          }
        </Stack>
      </Flex>
    </>
  )
}

export default DashboardShell
