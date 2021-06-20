import Layout from '../../components/Layout';
import cards from './meal-data2';
import styles from './meal.module.css';

export default function CardsPage() {
    // console.log('cards', cards);
    return (
      <div>
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
          <a href="./review">
            學習心得
          </a>
        </li>
      </ul>
    </nav>
    </div>
      <Layout>
        <section className={styles.card_container}>
          {cards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </section>
      </Layout>
      </div>
    );
  }

  function Card({ image, title, description }) {
    return (
      <div className={styles.card}>
        <div className={styles.card__body}>
          <img src={image} alt='' className={styles.card__image} />
          <h2 className={styles.card__title}>{title} </h2>
          <p className={styles.card__description}>{description}</p>
        </div>
        <button className={styles.card__btn}>View Recipe</button>
      </div>
    );
  }
  