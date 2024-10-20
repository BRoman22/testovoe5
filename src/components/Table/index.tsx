'use client';
import styles from './index.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useResize } from '@/hooks';
import dynamic from 'next/dynamic';

const Table = () => {
  const { desktopScreen } = useResize();
  const [top, setTop] = useState(0);

  const handleUp = () => setTop(0);
  const handleDown = () => setTop(desktopScreen ? 110 : 50);

  useEffect(() => {
    setTop(0);
  }, [desktopScreen]);

  return (
    <div
      className={styles.wrapper}
      style={{ height: desktopScreen ? 850 : 300 }}
    >
      <Image
        src="/table_up.jpg"
        alt="Стол"
        width={desktopScreen ? 800 : 296}
        height={desktopScreen ? 500 : 200}
        className={styles.tableUp}
        style={{ top: top }}
      />
      <Image
        src="/table_down.jpg"
        alt="Ямагучи"
        width={desktopScreen ? 800 : 296}
        height={desktopScreen ? 350 : 100}
        className={styles.tableDown}
      />
      <button
        className={`${styles.button} ${styles.button_up}`}
        onClick={handleUp}
      >
        вверх
      </button>
      <button
        className={`${styles.button} ${styles.button_down}`}
        onClick={handleDown}
      >
        вниз
      </button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Table), { ssr: false });
