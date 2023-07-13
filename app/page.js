import lorem from '../data/lorem';

export default function Home() {
  return (
    <main className='bg-blue-500 w-96 m-auto p-5'>
      <h2 className='p-2'>Hello World</h2>
      <p className='bg-blue-700 p-2'>{lorem.short}</p>
    </main>
  );
}
