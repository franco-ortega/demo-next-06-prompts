import lorem from '../../data/lorem';

export default function PlanetsLayout({ children }) {
  return (
    <main className='bg-blue-900 text-cyan-300 min-h-screen'>
      <p className='bg-sky-950 text-sm p-5'>{lorem.medium}</p>

      {children}
    </main>
  );
}
