'use client';

import { useParams } from 'next/navigation';

export default function Planet() {
  const params = useParams();

  const planet =
    params.planet.slice(0, 1).toUpperCase() + params.planet.slice(1);
  console.log(planet);

  return <div>This is planet {planet}.</div>;
}
