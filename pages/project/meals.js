import styles from '../../styles/meals.module.css'
import Head from 'next/head'
import menu from './meal-data'


export default function meals() {
    return (
        <div>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <title>MealDB</title>
            </Head>
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
         <div className={styles.container}>
           <h1 className={styles.title__main}>Meal Finder</h1>
            <div className={styles["flex-box"]}>
               <form className={styles["flex-box"]} id="submit">
               <input className={styles.input} type="text" id="search" placeholder="Search for meals or keywords"/>
              <button className={styles.btn__search} type="submit">
              <i className="fas fa-search"></i>
              </button>
               </form>
          <button className={styles.btn__random} id="random">
          <i className="fas fa-random"></i>
        </button>
             </div>
             <div id="result-heading" className={styles.title__search}></div>
        <div id="meals" className={styles.gallery}>
            {menu.map((meal) => (
                <Meal key={meal.id} name={meal.name} image={meal.image} />
            ))}
      </div>
        </div>
         </div>
        
    )
}

function Meal({id,image,name}) {
    return(
        <div className={styles["gallery-card"]}>
        <img className={styles["gallery-card__img"]}
          src={image}
          alt={name}
        /> 
        <div className={styles["gallery-card__details"]}  data-mealid={id}>
        <h2 >{name}</h2>
        </div>
      </div>
    )
}
