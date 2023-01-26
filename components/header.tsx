import Link from 'next/link';
import Container from './container';

const Header = () => {
  return (
    <Container>
      <div className='flex justify-end gap-10 mb-8 mt-8'>
        <h2 className='text-3xl font-bold'>
          <Link className='hover:underline' href='/'>
            Home
          </Link>
        </h2>
        <h2 className='text-3xl font-bold'>
          <Link className='hover:underline' href='/allposts'>
            All Posts
          </Link>
        </h2>
      </div>
    </Container>
  );
};

export default Header;
