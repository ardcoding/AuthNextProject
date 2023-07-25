import Head from 'next/head'
import Auth from './api/auth'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Authentication Page</title>
        <meta name="description" content="Authentication Page by NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Auth />
        </div>
      </main>
    </div>
  )
}
