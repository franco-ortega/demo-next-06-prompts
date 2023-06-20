'use client';

import { useParams } from 'next/navigation';
import planetData from '../../data/planets';

export default function Planet() {
  const params = useParams();

  const planet = planetData.find((planet) => planet.path === params.planet);

  return (
    <div>
      <p>This is planet {planet.title}.</p>
      <p>Facts: {planet.facts}</p>
    </div>
  );
}
