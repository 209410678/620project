import styles from './blog.module.css'

export default function blog() {
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
            <div  class={styles.body}>
             <link
      href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic|Source+Code+Pro:400,700"
      rel="stylesheet"
      type="text/css"
    />

    <div class={styles.post}>
      <div class={styles.date}>November 23 2015</div>
      <p class={styles.h2}>This Is My First Article</p>

      <p class={styles.quote}>
        Bacon ipsum dolor amet capicola strip steak landjaeger, biltong spare
        ribs rump cow ground round andouille sirloin pork. Short ribs pig
        prosciutto swine. Flank turducken turkey rump, leberkas shoulder
        bresaola ham hock tail drumstick corned beef. Venison pork chop bee
        jowl short ribs.
      </p>

      <p class={styles["post-info"]}>
        Bresaola short ribs pastrami, beef ribs spare ribs kielbasa ham tongue
        kevin landjaeger chicken ball tip. Pork chop beef kevin strip steak,
        chicken pork belly pastrami ham hock flank shoulder chuck turkey ribeye
        andouille ball tip. Leberkas ham ham hock pork loin. Filet mignon bacon
        pancetta leberkas turducken fatback tongue frankfurter jowl. Shoulder
        tenderloin chicken shank bacon shankle sirloin.
      </p>

      <p class={styles["post-info"]}>
        Pork pig pork loin prosciutto meatball turkey beef ribs ground round.
        Pork belly salami shank pork chop turducken ribeye swine shoulder
        tri-tip fatback cupim short loin chuck strip steak. Rump pork chop
        t-bone.
      </p>
    </div>

    <hr />

    <div class={styles.post}>
      <div class={styles.date}>December 11 2015</div>
      <p class={styles.h2}>This Is Another Article</p>

      <p class={styles.quote}>
        Bacon ipsum dolor amet capicola strip steak landjaeger, biltong spare
        ribs rump cow ground round andouille sirloin pork. Short ribs pig
        prosciutto swine. Flank turducken turkey rump, leberkas shoulder
        bresaola ham hock tail drumstick corned beef. Venison pork chop beef
        jowl short ribs.
      </p>

      <p class={styles["post-info"]}>
        Shankle beef ribs tongue strip steak flank landjaeger capicola hamburger
        chuck pancetta kevin. Sirloin landjaeger chicken, bresaola brisket swine
        short ribs turkey short loin ball tip porchetta ham hock. Capicola
        frankfurter jowl short loin. Kevin flank hamburger, beef venison shankle
        short loin bresaola frankfurter
      </p>

      <p class={styles["post-info"]}>
        Bresaola short ribs pastrami, beef ribs spare ribs kielbasa ham tongue
        kevin landjaeger chicken ball tip. Pork chop beef kevin strip steak,
        chicken pork belly pastrami ham hock flank shoulder chuck turkey ribeye
        andouille ball tip. Leberkas ham ham hock pork loin. Filet mignon bacon
        pancetta leberkas turducken fatback tongue frankfurter jowl. Shoulder
        tenderloin chicken shank bacon shankle sirloin.
      </p>
    </div>
    </div>
        </div>
    )
}
