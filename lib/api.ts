import content from '../tiddlywiki/tiddlers/published.json';
import TiddlerType from '../interfaces/tiddler';
import PageType from '../interfaces/page';

// alte Version mit statischem File

// export function getPostSlugs() {
//   return content.map((post) => post.slug);
// }

// Versuchsversion mit fancy fetchAPI

// async function fetchAPI(filter: string) {
//   const res = await fetch(
//     `http://localhost:8080/recipes/default/tiddlers.json?filter=${filter}`,
//     {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     }
//   );
//   const data = res.json();
//   console.log(data);
//   return {
//     props: { data },
//   };
// }

// Dazu gehört:

export async function getPostSlugs() {
  const res = await fetch(
    'http://localhost:8080/recipes/default/tiddlers.json?filter=[!is[system]tag[Published]]',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const slugs = await res.json();
  console.log('GETPOSTSLUGS IST GLEICH', slugs);
  return slugs;
}

// alte Version

// export function getPostBySlug(slug: string, fields: string[] = []) {
//   const post = content.find((post: TiddlerType) => post.slug === slug) || {
//     notfound: true,
//     slug: '',
//     text: '',
//     published_date: '',
//     title: '',
//     excerpt: '',
//     cover_image: '',
//   };

// Neue Version:

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const res = await fetch(
    `http://localhost:8080/recipes/default/tiddlers/$:/published/${slug}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const post = await res.json();
  console.log('GETPOSTBYSLUG IST GLEICH', post);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = post.fields.slug;
    }
    if (field === 'text') {
      items[field] = post.text;
    }
    if (field === 'published_date') {
      items[field] = post.fields.published_date;
    }
    if (field === 'title') {
      items[field] = post.title;
    }
    if (field === 'excerpt') {
      items[field] = post.excerpt;
    }
    if (field === 'cover_image') {
      items[field] = post.fields.cover_image;
    }
  });
  console.log('ITEMS IST GLEICH', items);
  return post;
}

// export async function getAllPosts(fields: string[] = []) {
//   const res = await fetch(
//     `http://localhost:8080/recipes/default/tiddlers.json?filter=[!is[system]tag[Published]`,
//     {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     }
//   );
//   const posts = await res.json();
//   console.log('ALL POSTS SIND GLEICH', posts);
//   return posts;
// }

export async function getAllPosts(fields: string[] = []) {
  const res = await fetch(
    `http://localhost:8080/recipes/default/tiddlers.json?filter=[!is[system]tag[Published]]`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const posts = await res.json();
  console.log('ALL POSTS SIND GLEICH', posts);
  return posts;
}

// export async function getRecentPosts(fields: string[] = []) {
//   getPostSlugs().sort(())

//   console.log('ALL POSTS SIND GLEICH', posts);
//   return posts;
// }