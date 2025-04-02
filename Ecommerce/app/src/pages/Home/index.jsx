import React from "react";

import ctgItem1 from "../../assets/imgs/category-item/item-1.png";
import ctgItem2 from "../../assets/imgs/category-item/item-2.png";
import ctgItem3 from "../../assets/imgs/category-item/item-3.png";

import styles from "./styles.module.scss";

export default function HomePage() {
  const browseCtgs = [
    {
      id: 1,
      imgUrl: ctgItem1,
      price: "$24 - $150",
      desc: "New sumatra mandeling coffe blend",
    },
    {
      id: 2,
      imgUrl: ctgItem2,
      price: "$37 - $160",
      desc: "Espresso arabica and robusta beans",
    },
    {
      id: 3,
      imgUrl: ctgItem3,
      price: "$32 - $160",
      desc: "Lavazza top class whole bean coffee blend",
    },
  ];
  return (
    <div className={`${styles.home_page} container`}>
      {/* Slideshow */}
      <section className={styles.slideshow}></section>

      {/* Browse Categories */}
      <section className={styles.browse_ctg}>
        <h2 className={styles.heading}>Browse Categories</h2>
        <div className="row g-4 g-lg-5">
          {browseCtgs.map((item) => {
            return (
              <div className="col col-12 col-md-4">
                <article className={styles.ctg_item}>
                  <img
                    src={item?.imgUrl}
                    alt=""
                    className={styles.ctg_item__thumb}
                  />
                  <section className={styles.ctg_item__info}>
                    <h3 className={styles.ctg_item__title}>{item?.price}</h3>
                    <p className={styles.ctg_item__desc}>{item?.desc}</p>
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
