import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../../assets/imgs/logo_tiktok.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        {/* Logo */}
        <a href="#!">
          <img className={styles.logo} src={logo} alt="Tiktok" />
        </a>

        {/* Search Box */}
        <div className="search_box">
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
          />
          <button className="close-btn">{/* Close */}</button>
          {/* Loading */}
          <button className="search-btn">{/* Search */}</button>
        </div>
      </div>
    </header>
  );
}
