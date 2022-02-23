import React from 'react'
import styles from './layout.module.css';

interface HeaderProps {
  headerTitle: string;
  left: any;
  right: any;
}


function Header({headerTitle, left, right}: HeaderProps) {
  return (
      <header className={styles.header}>
        <div className={styles.container}>
        <h1 className={styles.title}>{headerTitle}</h1>
          <div className={styles.left}>
            {left}
          </div>
          <div className={styles.right}>
            {right}
          </div>
        </div>
      </header>
  )
}

export default Header