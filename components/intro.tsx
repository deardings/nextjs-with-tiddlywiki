const Intro = () => {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        Next.js-with-TiddlyWiki
      </h1>
      <h2 className='text-center md:text-left text-lg mt-5 md:pl-8'>
        A proof of concept using{' '}
        <a
          href='https://nextjs.org/'
          className='underline hover:text-blue-600 duration-200 transition-colors'>
          Next.js
        </a>{' '}
        with an integrated{' '}
        <a
          href='https://tiddlywiki.com'
          className='underline hover:text-blue-600 duration-200 transition-colors'>
          TiddlyWiki
        </a>{' '}
        CMS.
      </h2>
    </section>
  );
};

export default Intro;
