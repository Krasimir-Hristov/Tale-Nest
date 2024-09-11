import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg' width={115} height={43} alt='Tale Nest' />
        </Link>
        <ul className='xl:flex hidden text-sm gap-7'></ul>
      </div>
    </nav>
  );
};

export default Navbar;
