import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import styles from "./styles.module.scss"

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.main_content}>{children}</main>
      </div>
    </>
  );
}
