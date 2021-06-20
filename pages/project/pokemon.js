import styles from "./nav2.module.css";

export default function pokemon() {
    return (
        <div>
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
          <a href="./meal">
            學習心得
          </a>
        </li>
      </ul>
    </nav>
              <h1>First Gen Pokemon Chart</h1>
    <table border="2">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Type</th>
        <th>Evolves Into</th>
      </tr>
      <tr>
        <td>
          <img
            src="http://img4.wikia.nocookie.net/__cb20140328190757/pokemon/images/thumb/2/21/001Bulbasaur.png/200px-001Bulbasaur.png"
            alt=""
          />
        </td>
        <td>Bulbasaur</td>
        <td>Grass/Poison</td>
        <td>
          <a href="http://pokemon.wikia.com/wiki/Ivysaur">Ivysaur </a>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="http://img4.wikia.nocookie.net/__cb20140724195345/pokemon/images/thumb/7/73/004Charmander.png/200px-004Charmander.png"
            alt=""
          />
        </td>
        <td>Charmander</td>
        <td>Fire</td>
        <td>
          <a href="http://pokemon.wikia.com/wiki/Charmeleon">Charmeleon</a>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="http://img1.wikia.nocookie.net/__cb20140328191525/pokemon/images/thumb/3/39/007Squirtle.png/200px-007Squirtle.png"
            alt=""
          />
        </td>
        <td>Squirtle</td>
        <td>Water</td>
        <td>
          <a href="http://pokemon.wikia.com/wiki/Wartortle">Wartortle</a>
        </td>
      </tr>
    </table>
        </div>
    )
}
