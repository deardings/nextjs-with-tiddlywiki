import TiddlerDateFormatter from './tiddler-date-formatter';
import Link from 'next/link';

type Props = {
  title: string;
  excerpt: string;
  published_date: string;
  slug: string;
};

const HeroPost = ({ title, excerpt, published_date, slug }: Props) => {
  return (
    <section>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-5xl leading-tight'>
            <Link as={`/posts/${slug}`} href='/posts/[slug]'>
              <a className='hover:underline'>
                <div dangerouslySetInnerHTML={{ __html: title }}></div>
              </a>
            </Link>
          </h3>
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
