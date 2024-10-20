import styles from './index.module.scss';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Yamaguchi Voice Control</h1>
      <p className={styles.text1}>
        Вы можете управлять программами массажа или самим креслом с помощью
        голосовых команд, приведённых ниже. Коснитесь кратковременно кнопки
        голосового управления, расположенной на левом подлокотнике, для запуска
        сеанса голосового управления. Произнесите одну из доступных команд. Если
        произнесённая команда распознана, вы услышите ответ и кресло приступит к
        выполнению запроса.
      </p>
      <p className={styles.text2}>
        СКАЖИ:<span style={{ fontSize: '62px' }}>«ОКЕЙ, ЯМАГУЧИ»</span>
      </p>
      <Image
        src="/interface.svg"
        alt=""
        width={850}
        height={850}
        className={styles.image1}
      />
      <Image
        src="/33.svg"
        alt=""
        width={430}
        height={850}
        className={styles.image2}
      />
    </main>
  );
}
