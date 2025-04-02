import React from "react";

import ctgItem1 from "../../assets/imgs/category-item/item-1.png";
import ctgItem2 from "../../assets/imgs/category-item/item-2.png";
import ctgItem3 from "../../assets/imgs/category-item/item-3.png";

import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <div className={`${styles.home_page} container`}>
      {/* Slideshow */}
      <section className={styles.slideshow}>
        <svg
          width="1340"
          height="455"
          viewBox="0 0 1340 455"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1340" height="455" rx="20" fill="#77DAE6" />
        </svg>
      </section>

      {/* Browse Categories */}
      <section className={styles.browse_ctg}>
        <h2 className={styles.heading}>Browse Categories</h2>
        <div className="row g-5">
          {[ctgItem1, ctgItem2, ctgItem3].map((item) => {
            return (
              <div className="col col-12 col-lg-4">
                <article className={styles.ctg_item}>
                  <img src={item} alt="" className={styles.ctg_item__thumb} />
                  <section className={styles.ctg_item__info}>
                    <h3 className={styles.ctg_item__title}>$24 - $150</h3>
                    <p className={styles.ctg_item__desc}>
                      New sumatra mandeling coffe blend
                    </p>
                  </section>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
