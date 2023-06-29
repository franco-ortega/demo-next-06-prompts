// import Link from 'next/link';
// import planets from '../../data/planets';

export default function Moons() {
  return (
    <>
      <h2>Moons</h2>
      <ul className='flex flex-col gap-1 px-2'>
        <li>Moon One</li>
        <li>Moon Two</li>
        <li>Moon Three</li>
        {/* {planets.length > 0 &&
          planets.map((planet) => (
            <li key={planet.id}>
              <Link href={`/planets/${planet.path}`}>{planet.title}</Link>
            </li>
          ))} */}
      </ul>
    </>
  );
}
