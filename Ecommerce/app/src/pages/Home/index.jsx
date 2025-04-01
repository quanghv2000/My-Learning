import React from "react";
import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <div className={styles.home_page}>
      <div className={styles.slideshow}>
        <svg
          width="1340"
          height="455"
          viewBox="0 0 1340 455"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1340" height="455" rx="20" fill="#77DAE6" />
        </svg>
      </div>
    </div>
  );
}
