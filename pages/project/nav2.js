import styles from "./nav2.module.css";

export default function nav2() {
  return (
    <nav class={styles.dropdownmenu}>
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
          <a href="./review">
            學習心得
          </a>
        </li>
      </ul>
    </nav>
  );
}
