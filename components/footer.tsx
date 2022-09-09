import Container from './container';

const Footer = () => {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200'>
      <Container>
        <div className='flex-col justify-center text-center m-3 gap-10'>
          <p className='font-bold'>
            Idea by{' '}
            <a
              className='underline'
              href='https://github.com/deardings/nextjs-with-tiddlywiki'>
              Deardings
            </a>
            . Special thanks to TiddlyWiki developers and community.{' '}
          </p>
          Images provided by{' '}
          <a
            className='underline'
            href='https://unsplash.com/@ivanshemereko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Ivan Shemereko
          </a>
          ,{' '}
          <a
            className='underline'
            href='https://unsplash.com/@martinpechy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Martin Péchy
          </a>
          ,{' '}
          <a
            className='underline'
            href='https://unsplash.com/@raphaelphotoch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Raphael Schaller
          </a>{' '}
          and{' '}
          <a
            className='underline'
            href='https://unsplash.com/@rvignes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Romain Vignes
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Unsplash
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
