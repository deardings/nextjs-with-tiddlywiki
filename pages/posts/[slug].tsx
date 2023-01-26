import Head from 'next/head';
import Layout from '../../components/layout';
import Container from '../../components/container';
import PageType from '../../interfaces/page';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import TiddlerDateFormatter from '../../components/tiddler-date-formatter';
import Image from 'next/image';

export default function Page({ page }: PageType) {
  console.log(page)
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>{page.title} | Next.js with Tiddlywiki</title>
          </Head>
          <div className='mb-8'>
            <Image
              src={
                page.cover_image ? `/img/${page.cover_image}` : '/img/standard-image.jpg'
              }
              width='30'
              height='20'
              layout='responsive'
              objectFit='cover'
              alt={page.title}
            />
          </div>
          <h1 className='text-8xl mx-auto font-bold tracking-tighter leading-tight md:pr-8'>
            <div dangerouslySetInnerHTML={{ __html: page.title }}></div>
          </h1>
          <div className='text-lg mb-4'>
            <TiddlerDateFormatter dateString={page.published_date} />
          </div>
          <div
            className='max-w-4xl mb-10 prose lg:text-justify break-normal'
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
    'cover_image',
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
