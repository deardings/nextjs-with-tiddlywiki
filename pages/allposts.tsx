import Container from '../components/container';
import AllStories from '../components/all-stories';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import TiddlerType from '../interfaces/tiddler';

type Props = {
  allPosts: TiddlerType[];
};

export default function Rezensionen({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Geist.lol | Alle Besprechungen</title>
        </Head>
        <Container>
          <AllStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'published_date',
    'excerpt',
    'slug',
  ]);

  return {
    props: { allPosts },
  };
};
