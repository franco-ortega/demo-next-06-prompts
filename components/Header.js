import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1 className='text-xl text-gray-600 w-fit m-auto'>Header</h1>
      <nav className='w-fit m-auto text-blue-500'>
        <ul className='flex flex-row gap-2'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/planets'}>Planets</Link>
          </li>
          <li>
            <Link href={'/moons'}>Moons</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
