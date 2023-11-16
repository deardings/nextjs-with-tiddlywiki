import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Head from 'next/head';
import Tiddler from '../interfaces/tiddler';
import { getAllPosts } from '../lib/api';
import MorePosts from '../components/more-posts';

type Props = {
  recentPosts: Tiddler[];
};

export default function Index({ recentPosts }: Props) {
  const heroPost = recentPosts[0];
  const morePosts = recentPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js with TiddlyWiki</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              published_date={heroPost.published_date}
              excerpt={heroPost.excerpt}
              slug={heroPost.slug}
              cover_image={heroPost.cover_image}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const recentPosts = await getAllPosts([
    'title',
    'published_date',
    'excerpt',
    'slug',
    'cover_image',
  ]);

  return {
    props: { recentPosts },
  };
};
