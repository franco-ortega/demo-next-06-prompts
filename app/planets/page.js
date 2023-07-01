import Link from 'next/link';
import planets from '../../data/planets';
import PlanetList from '@/components/PlanetList';

export default function Planets() {
  return (
    <>
      <h2>Planets</h2>
      <PlanetList />
    </>
  );
}
