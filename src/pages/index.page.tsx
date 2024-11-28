import { trpc } from '@/utils/trpc';
import { GetServerSideProps } from 'next';

type Props = {
  name: string;
};

export default function Home(props: Props) {
  const { data, isLoading, refetch } = trpc.hello.getHello.useQuery();
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <section>
        <h2>Client Fetch</h2>
        <div>
          <button onClick={() => refetch()}>Refetch</button>
          <p>{isLoading || !data ? 'loading...' : data.greeting}</p>
        </div>
      </section>
      <br />
      <section>
        <h2>gSSP</h2>
        <p>{props.name}</p>
      </section>
    </>
  );
}

export const getServerSideProps = (async () => {
  const data = await fetch('http://localhost:3000/api/hello');
  const json = await data.json();
  console.log('fetch: ', Date.now());

  return {
    props: json,
  };
}) satisfies GetServerSideProps<Props>;
