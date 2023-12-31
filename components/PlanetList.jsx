import Link from 'next/link';
import planets from '../data/planets';

export default function PlanetList() {
  return (
    <ul className='flex flex-col gap-1 px-2'>
      {planets.length > 0 &&
        planets.map((planet) => (
          <li key={planet.id}>
            <Link href={`/planets/${planet.path}`}>{planet.title}</Link>
          </li>
        ))}
    </ul>
  );
}
