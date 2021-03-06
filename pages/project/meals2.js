import Head from 'next/head';
import styles from './meal.module.css';

export default function MealsPage() {
    return (
    <div className={styles.container}>
        <div className={styles.html}>
    <Head> 

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 

    <title>Meals</title> 

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
<div className={styles.main}>
        <div className={styles.card }>
      <div className={ styles.card__body }>
          <img
            src="https://www.themealdb.com/images/media/meals/1529446137.jpg"
            alt=""
            className={ styles.card__image }
          />
          <h2 className={ styles.card__title }>Egg Drop Soup</h2>
          <p className={ styles.card__description }>
          In a wok add chicken broth and wait for it to boil. Next add salt, sugar, white pepper, sesame seed oil. When the chicken broth is boiling add the vegetables to the wok. To thicken the sauce, 
          whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness. Next add 1 egg slightly beaten with a knife or fork and add it to the soup slowly and stir for 8 seconds Serve the soup in a bowl and add the green onions on top.
          </p>
        </div>
        <button className={ styles.card__btn }>View Recipe</button>
      </div>

      <div className={ styles.card }>
        <div className={ styles.card__body }>
          <img
            src="https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg"
            alt=""
            className={ styles.card__image }
          />
          <h2 className={ styles.card__title}>Tuna and Egg Briks</h2>
          <p className={ styles.card__description }>
          Heat 2 tsp of the oil in a large saucepan and cook the spring onions over a low heat for 3 minutes or until beginning to soften. Add the spinach, cover with a tight-fitting lid and cook for a further 2–3 minutes or until tender and wilted, 
          stirring once or twice. Tip the mixture into a sieve or colander and leave to drain and cool. Using a saucer as a guide, cut out 24 rounds about 12.5 cm (5 in) in diameter from the filo pastry, cutting 6 rounds from each sheet. Stack the filo rounds in a pile, 
          then cover with cling film to prevent them from drying out. When the spinach mixture is cool, squeeze out as much excess liquid as possible, then transfer to a bowl. Add the tuna, eggs, hot pepper sauce, and salt and pepper to taste. Mix well. 
          Preheat the oven to 200°C (400°F, gas mark 6). Take one filo round and very lightly brush with some of the remaining oil. Top with a second round and brush with a little oil, then place a third round on top and brush with oil. Place a heaped tbsp of the filling in the middle of the round, 
          then fold the pastry over to make a half-moon shape. Fold in the edges, twisting them to seal, and place on a non-stick baking sheet. Repeat with the remaining pastry and filling to make 8 briks in all. Lightly brush the briks with the remaining oil. Bake for 12–15 minutes or until the pastry is crisp and golden brown. Meanwhile,
           combine the tomatoes and cucumber in a bowl and sprinkle with the lemon juice and seasoning to taste. Serve the briks hot with this salad and the chutney.
          </p>
        </div>
        <button className={ styles.card__btn }>View Recipe</button>
      </div>

      <div className={ styles.card }>
        <div className={ styles.card__body }>
          <img
            src="https://www.themealdb.com/images/media/meals/1550440197.jpg"
            alt=""
            className={ styles.card__image }
          />
          <h2 className={ styles.card__title}>Salmon Eggs Eggs Benedict</h2>
          <p className={ styles.card__description }>
          First make the Hollandaise sauce. Put the lemon juice and vinegar in a small bowl, add the egg yolks and whisk with a balloon whisk until light and frothy. Place the bowl over a pan of simmering water and whisk until mixture thickens. Gradually add the butter, whisking constantly until thick – if it looks like it might be splitting, then whisk off the heat for a few mins. Season and keep warm. To poach the eggs, bring a large pan of water to the boil and add the vinegar. Lower the heat so that the water is simmering gently. Stir the water so you have a slight whirlpool, then slide in the eggs one by one. Cook each for about 4 mins, then remove with a slotted spoon. Lightly toast and butter the muffins, then put a couple of slices of salmon on each half. Top each with an egg, spoon over some Hollandaise and garnish with chopped chives.
          </p>
        </div>
        <button className={ styles.card__btn }>View Recipe</button>
      </div>

      <div className={ styles.card }>
        <div className={ styles.card__body }>
          <img
            src="https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg"
            alt=""
            className={ styles.card__image }
          />
          <h2 className={ styles.card__title}>Roasted Eggplant With Tahini, Pine Nuts, and Lentils</h2>
          <p className={ styles.card__description }>
          For the Lentils: Adjust oven rack to center position and preheat oven to 450°F to prepare for roasting eggplant. Meanwhile, heat 2 tablespoons olive oil in a medium saucepan over medium heat until shimmering. Add carrots, celery, and onion and cook, stirring, until softened but not browned, about 4 minutes. Add garlic and cook, stirring, until fragrant, about 30 seconds. Add lentils, bay leaves, stock or water, and a pinch of salt. Bring to a simmer, cover with the lid partially ajar, and cook until lentils are tender, about 30 minutes. (Top up with water if lentils are at any point not fully submerged.) Remove lid, stir in vinegar, and reduce until lentils are moist but not soupy. Season to taste with salt and pepper, cover, and keep warm until ready to serve. 2. For the Eggplant: While lentils cook, cut each eggplant in half. Score flesh with the tip of a paring knife in a cross-hatch pattern at 1-inch intervals. Transfer to a foil-lined rimmed baking sheet, cut side up, and brush each eggplant half with 1 tablespoon oil, letting each brushstroke be fully absorbed before brushing with more. Season with salt and pepper. Place a rosemary sprig on top of each one. Transfer to oven and roast until completely tender and well charred, 25 to 35 minutes. Remove from oven and discard rosemary. 3. To Serve: Heat 2 tablespoons olive oil and pine nuts in a medium skillet set over medium heat. Cook, tossing nuts frequently, until golden brown and aromatic, about 4 minutes. Transfer to a bowl to halt cooking. Stir half of parsley and rosemary into lentils and transfer to a serving platter. Arrange eggplant halves on top. Spread a few tablespoons of tahini sauce over each eggplant half and sprinkle with pine nuts. Sprinkle with remaining parsley and rosemary, drizzle with additional olive oil, and serve.
          </p>
        </div>
        <button className={ styles.card__btn }>View Recipe</button>
      </div>

      <div className={ styles.card }>
        <div className={ styles.card__body}>
          <img
            src="https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg"
            alt=""
            className={ styles.card__image }
          />
          <h2 className={ styles.card__title }>Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt</h2>
          <p className={ styles.card__description }>
          Heat the oil in a 12-inch skillet over high heat until shimmering. Add the eggplants and lower the heat to medium. Season with salt and pepper as you rotate the eggplants, browning them on all sides. Continue to cook, turning regularly, until a fork inserted into the eggplant meets no resistance (you may have to stand them up on their fat end to finish cooking the thickest parts), about 20 minutes, lowering the heat and sprinkling water into the pan as necessary if the eggplants threaten to burn or smoke excessively. 2. Mix the harissa, chickpeas and tomatoes together, then add to the eggplants. Cook until the tomatoes have blistered and broken down, about 5 minutes more. Season with salt and pepper and add water as necessary to thin to a saucy consistency. Meanwhile, combine the yogurt and cumin in a serving bowl. Season with salt and pepper. 3. Top the eggplant mixture with the parsley, drizzle with more extra virgin olive oil, and serve with the yogurt on the side.
          </p>
        </div>
        <button className={ styles.card__btn }>View Recipe</button>
      </div>
         </div>
       </div>
    </div>
    );
  }
  