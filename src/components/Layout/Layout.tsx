import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import styles from './Layout.module.css'

/**
 * Assign type of props to Layout component
 */
type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar to="/shop" />
      <div className={styles.page}>{children}</div>
    </>
  )
}
