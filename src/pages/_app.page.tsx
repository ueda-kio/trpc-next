import { trpc } from '@/utils/trpc';
import type { AppProps } from 'next/app';
import Head from 'next/head';

if (process.env.NODE_ENV === 'development') {
  import('@/mocks');
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default trpc.withTRPC(App);
