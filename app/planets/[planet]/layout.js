export default function PlanetLayout({ children }) {
  return (
    <main className='bg-blue-700 text-cyan-300 w-fit mx-auto my-5 p-10 rounded-full'>
      {children}
      <p className='bg-sky-500 text-sm p-5'>Layout in planet.</p>
    </main>
  );
}
