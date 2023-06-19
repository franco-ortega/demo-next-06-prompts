import Link from 'next/link';

export default function Planets() {
  return (
    <>
      <h2>Planets</h2>
      <ul className='flex flex-col gap-1 px-2'>
        <li>
          <Link href='/planets/mercury'>Mercury</Link>
        </li>
        <li>
          <Link href='/planets/venus'>Venus</Link>
        </li>
      </ul>
    </>
  );
}
