import * as React from 'react'
import Header from './Header'
import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  headerTitle: string;
  leftHeader?: any;
  rightHeader?: any;
}
function Layout({ children, headerTitle, leftHeader, rightHeader }: LayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      <Header headerTitle={headerTitle} left={leftHeader} right={rightHeader}/>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  )
}

export default Layout