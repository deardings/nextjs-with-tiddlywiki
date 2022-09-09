import content from '../tiddlywiki/tiddlers/published.json';
import TiddlerType from '../interfaces/tiddler';

export function getPostSlugs() {
  return content.map((post) => post.slug);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const post = content.find((post: TiddlerType) => post.slug === slug) || {
    notfound: true,
    slug: '',
    text: '',
    published_date: '',
    title: '',
    excerpt: '',
    cover_image: '',
  };

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = post.slug;
    }
    if (field === 'text') {
      items[field] = post.text;
    }
    if (field === 'published_date') {
      items[field] = post.published_date;
    }
    if (field === 'title') {
      items[field] = post.title;
    }
    if (field === 'excerpt') {
      items[field] = post.excerpt;
    }
    if (field === 'cover_image') {
      items[field] = post.cover_image;
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) =>
      post1.published_date > post2.published_date ? -1 : 1
    );
  return posts;
}
