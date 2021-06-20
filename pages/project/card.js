import styles from './card.module.css'

export default function card() {
  return (
    <div> <nav class={styles.dropdownmenu}>
    <ul>
      <li>
        <a href="./nav2">Home</a>
      </li>
      <li>
        <a href="./meals">Mealdb</a>
      </li>
      <li>
        <a href="#">作品集</a>
        <ul class={styles.submenu}>
          <li>
            <a href="./pokemon">
              Pokemon
            </a>
          </li>
          <li>
            <a href="./blog">
              My Blog
            </a>
          </li>
          <li>
            <a href="./card">
              card
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="./meal">
          w15-1
        </a>
      </li>
      <li>
        <a href="./meals2">
          w15-2
        </a>
      </li>
      <li>
        <a href="./meal">
          學習心得
        </a>
      </li>
    </ul>
  </nav>

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
    </div>
  );
}
