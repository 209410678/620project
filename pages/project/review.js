import styles from './review.module.css'

export default function review() {
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
          <a href="./review">
            學習心得
          </a>
        </li>
      </ul>
    </nav>
        <div class={styles.word}>
            <p>.</p>
            <p>.</p>
            <p >Github上傳變得熟練,很少出錯了 </p>
            <p > NextJS基礎架構看的懂,但沒有參照不太會寫</p>
            <p >Strapi Heroku不熟,待加強</p>
            <p >Vercel 不會,問題出一堆</p>
            <p  >上課狀況:前半學期狀況良好,上課跟得上,作業寫得出</p>
            <p  >遠距教學後狀況差,上課跟不上,作業寫不出,突發問題多</p>
            <p > 對老師感想:教授和助教都很有耐心幫學生解決問題,備課和教學都很用心,除了教太快其他都很好</p>
            <p > 建議:老師,我們下學期可以不要像這學期,最後幾個禮拜突然進度暴衝嗎?</p>
           
        </div>
        </div>
    )
}
