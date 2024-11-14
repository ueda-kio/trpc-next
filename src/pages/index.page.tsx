import { trpc } from '@/utils/trpc';
import { Top } from './Top';
import { getSession } from '@/lib/getSession';
import { GetServerSideProps } from 'next';

type Props = {
  json: { name: string };
};

export default function Home(props: Props) {
  const { data, isLoading } = trpc.hello.getHello.useQuery({ text: 'world' });
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Top />
      <h2>{props.json.name}</h2>
      <h2>{data && data.greeting}</h2>
    </>
  );
}

export const getServerSideProps = (async ({ req, res }) => {
  const data = await fetch('http://localhost:3000/api/hello');
  console.log('data', data);
  const json = await data.json();

  const session = await getSession(req, res);
  console.log({ session });

  return {
    props: { json },
  };
}) satisfies GetServerSideProps<Props>;
