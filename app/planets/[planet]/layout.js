export default function PlanetLayout({ children }) {
  return (
    <main className='bg-blue-700 text-cyan-300 w-fit mx-auto my-5 p-10 rounded-full'>
      <p className='mx-auto w-fit'>.</p>
      <p className='mx-auto w-fit'>.</p>
      <p className='mx-auto w-fit'>.</p>
      {children}
      <p className='mx-auto w-fit'>.</p>
      <p className='mx-auto w-fit'>.</p>
      <p className='mx-auto w-fit'>.</p>
    </main>
  );
}
