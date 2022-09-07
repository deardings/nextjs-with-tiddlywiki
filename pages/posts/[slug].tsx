import Head from 'next/head';
import Layout from '../../components/layout';
import Container from '../../components/container';
import PageType from '../../interfaces/page';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import TiddlerDateFormatter from '../../components/tiddler-date-formatter';

export default function Page({ page }: PageType) {
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>
              {page.title}
            </title>
          </Head>
          <h1 className='text-5xl mx-auto font-bold tracking-tighter leading-tight md:pr-8'>
            <div dangerouslySetInnerHTML={{ __html: page.title }}></div>
          </h1>
          <div className='text-lg mb-4'>
            <TiddlerDateFormatter dateString={page.published_date} />
          </div>
          <div
            className='max-w-2xl mb-10 prose lg:text-justify break-normal'
            dangerouslySetInnerHTML={{ __html: page.text }}></div>
        </Container>
      </Layout>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const page = getPostBySlug(params.slug, [
    'slug',
    'title',
    'published_date',
    'text',
  ]);
  return { props: { page } };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
