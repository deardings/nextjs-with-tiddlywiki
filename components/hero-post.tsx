import TiddlerDateFormatter from './tiddler-date-formatter';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  excerpt: string;
  published_date: string;
  slug: string;
  cover_image: string;
};

const HeroPost = ({
  title,
  excerpt,
  published_date,
  slug,
  cover_image,
}: Props) => {
  return (
    <section>
      <div className='mb-8'>
        <Image
          src={cover_image ? `/img/${cover_image}` : '/img/standard-image.jpg'}
          width='30em'
          height='20em'
          layout='responsive'
          objectFit='contain'
          alt={title}
        />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h1 className='mb-4 text-6xl font-bold lg:text-8xl leading-tight'>
            <Link as={`/posts/${slug}`} href='/posts/[slug]'>
              <a className='hover:underline'>
                <div dangerouslySetInnerHTML={{ __html: title }}></div>
              </a>
            </Link>
          </h1>
          <div className='mb-4 md:mb-0 text-lg'>
            <TiddlerDateFormatter dateString={published_date} />
          </div>
        </div>
        <div>
          <div
            className='text-lg leading-relaxed mb-4 prose'
            dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          <div className='text-lg leading-relaxed mb-4 bold'>
            <Link as={`/posts/${slug}`} href='/posts/[slug]'>
              <a className='hover:underline'>...read on</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
