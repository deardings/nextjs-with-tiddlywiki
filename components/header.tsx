import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-end gap-10 m-8'>
      <h2>
        <Link href='/'>
          <a className='hover:underline'>Home</a>
        </Link>
      </h2>
      <h2>
        <Link href='/allposts'>
          <a className='hover:underline'>All Posts</a>
        </Link>
      </h2>
    </div>
  );
};

export default Header;
