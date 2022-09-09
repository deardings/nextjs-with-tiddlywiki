import PostPreview from './post-preview';
import type Tiddler from '../interfaces/tiddler';

type Props = {
  posts: Tiddler[];
};

const MorePosts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight'>
        More Stories
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-10 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            published_date={post.published_date}
            excerpt={post.excerpt}
            slug={post.slug}
            cover_image={post.cover_image}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;
