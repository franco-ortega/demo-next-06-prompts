export default function Moons() {
  const moons = ['Moon One', 'Moon Two', 'Moon Three'];

  return (
    <>
      <h2 className='bg-slate-300'>Moons</h2>
      <ul className='flex flex-col gap-1 px-2 bg-black'>
        {moons.length > 0 &&
          moons.map((moon) => (
            <li key={moon} className='bg-slate-300 w-fit rounded-full m-2 p-20'>
              {moon}
            </li>
          ))}
      </ul>
    </>
  );
}
