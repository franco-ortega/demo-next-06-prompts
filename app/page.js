import lorem from '../data/lorem';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>Hello World</h2>
      <p className={styles.p}>{lorem.short}</p>
    </main>
  );
}

const styles = {
  main: 'bg-blue-500 w-96 m-auto p-5',
  h2: 'p-2',
  p: 'bg-blue-700 p-2 text-gray-300',
};
