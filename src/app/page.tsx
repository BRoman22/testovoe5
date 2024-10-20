import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Link href="/1" className={styles.link}>
          Страница 1
        </Link>
        <Link href="/2" className={styles.link}>
          Страница 2
        </Link>
      </div>
    </main>
  );
}
