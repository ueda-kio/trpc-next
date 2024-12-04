import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>sample title</title>
      </Head>
      <section>
        <h1>Layout</h1>
        {children}
      </section>
    </>
  );
};
