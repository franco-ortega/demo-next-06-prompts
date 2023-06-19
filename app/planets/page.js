'use client';

import Link from 'next/link';
import planetsData from '../data/planets';
import { useEffect, useState } from 'react';

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(planetsData);
  }, []);

  console.log(planets);

  return (
    <>
      <h2>Planets</h2>
      <ul className='flex flex-col gap-1 px-2'>
        {planets.length > 0 &&
          planets.map((planet) => (
            <li key={planet.id}>
              <Link href={`/planets/${planet.path}`}>{planet.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
