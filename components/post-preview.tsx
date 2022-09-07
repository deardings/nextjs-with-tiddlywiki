import TiddlerDateFormatter from './tiddler-date-formatter';
import Link from 'next/link';

type Props = {
  title: string;
  published_date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, published_date, excerpt, slug }: Props) => {
  return (
    <div>
      <h3 className='text-xl mb-3 leading-snug font-bold hover:underline'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <div dangerouslySetInnerHTML={{ __html: title }}></div>
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <TiddlerDateFormatter dateString={published_date} />
      </div>
      <div
        className='text-lg leading-relaxed mb-4 prose'
        dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      <div className='text-lg leading-relaxed mb-4 bold'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>...read on</a>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
