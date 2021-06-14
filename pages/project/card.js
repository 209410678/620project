import styles from './card.module.css'

export default function card() {
  return (
      <div class={styles.body}>
    <div>
      <div class={styles.card}></div>
      <div class={`${styles.card} ${styles["card-1"]}`}></div>
      <div class={`${styles.card} ${styles["card-2"]}`}></div>
      <div class={`${styles.card} ${styles["card-3"]}`}></div>
      <div class={`${styles.card} ${styles["card-4"]}`}></div>
      <div class={`${styles.card} ${styles["card-5"]}`}></div>
    </div>
    </div>
  );
}
