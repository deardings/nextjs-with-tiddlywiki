## Disclaimer

This is my first public Github-repository that I see some kind of value in. I am an awful programmer and autodidact, so by no means I can claim to understand all the features and concepts neither of the Next.js nor the TiddlyWiki ecosystem. Yet, I have been running a little website with Next.js for more than a year and am using TIddlyWiki to keep and organize my journal with nowadays more than two thousand tiddlers since 2018.

In this project, I tried to follow the book whereever possible, but will be happy if you can identify any conceptual mistakes or improvements. This is thought as a proof of concept, which will probably never reach a production status. It cannot compete with the finetuned [CMS examples given by Next.js](https://github.com/vercel/next.js/tree/canary/examples).

## The Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and combined with an internal [TiddlyWiki](https://tiddlywiki.com) to be used as CMS. It aims at providing an easy setup to make TiddlyWiki content available on a custom designable Next.js website. My personal content focuses on reviews, academic articles or blog posts as more or less "singular" entities. Thus, a lot of the non-linear design of TiddlyWiki, it's knowledge organization, tags, internal linking and macros are out of the scope.

I want it to be easy: Push a single button and the tiddler appears as post on your blog. But I also want to be able to handle the tiddlers' fields individually in the Next.js app, not just show a static HTML export. The idea is to create previews and a hero post, use sliders and animations on just titles or images and basically start with my CSS from scratch.

After evaluating a bunch of headless CMS systems provided with Next.js, they all seemed to be too much for my limited use case. I would have to get them set up, learn about their individual API calls, then build my own (rather simple) data structure and see how to fill my content in.

But the structured content is already there, I realised, it lies in my TiddlyWiki on my VPS behind a reverse proxy. So I took it from there. TiddlyWiki might not be a dedicated and not the best CMS, but I'm not building a high level enterprise website anyway.

## Getting Started

Clone this Repo:

```bash
git clone https://github.com/deardings/nextjs-with-tiddlywiki
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server for the Next.js app and start the internal TillyWiki with one command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the TiddlyWiki "backend".

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Next.js "frontend" .

Follow the instructions given in the TiddlyWiki, publish the second and third posts and see the result on the frontend.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Maybe Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
