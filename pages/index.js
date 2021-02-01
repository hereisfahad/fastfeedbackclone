import Head from 'next/head'
import { useAuth } from '@/lib/auth'

const Home = () => {
  const { user, signinWithGithub, signout } = useAuth()
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>
          Welcome to Fast Feedback Clone
        </h1>
        {
          user ? <button onClick={signout}>Signout</button> : <button onClick={signinWithGithub}>Signin</button>
        }
      </main>
    </div>
  )
}

export default Home