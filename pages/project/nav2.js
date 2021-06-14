import styles from "./nav2.module.css";

export default function nav2() {
  return (
    <nav class={styles.dropdownmenu}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="./meals">
            Mealdb
          </a>
        </li>
        <li>
          <a href="#">作品集</a>
          <ul class={styles.submenu}>
            <li>
              <a href="https://209410678.github.io/1091-1N-demo-209410678/w01-intro-pokemon/pokemon.html">
            Pokemon
              </a>
            </li>
            <li>
              <a href="https://209410678.github.io/1091-1N-demo-209410678/w02-blog/blog.html">
            My Blog
              </a>
            </li>
            <li>
              <a href="https://209410678.github.io/1091-1N-demo-209410678/w02-imgGallery/imgGallery.html">
            Image Gallery
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="http://www.jochaho.com/wordpress/category/news/">News</a>
        </li>
        <li>
          <a href="http://www.jochaho.com/wordpress/about-pritesh-badge/">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
