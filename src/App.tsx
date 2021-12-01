import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>Header</div>
      <div className={styles.nav}>nav</div>
      <div className={styles.sideBar}>Side bar</div>
      <div className={styles.content}>Contetn</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
}

export default App;
