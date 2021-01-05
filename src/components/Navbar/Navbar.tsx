import React from 'react'
import styles from './Navbar.module.css'
import { AiFillAppstore } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { Spacer } from '../../components'
import { CgProfile } from 'react-icons/cg'

type NavProps = { to: string }

const imagePath = '../../img/default.png';

export const Navbar = ({ to }: NavProps) => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <Link to={to} className="flex">
          <AiFillAppstore className={`font-xl ${styles.blue} mr-2`} />
          เมนูหลัก
        </Link>
        <div className={styles.profile}>
        <Link to={to} className="flex">
          <FaBell />
          <Spacer x={0.5} />
          <CgProfile />
          <Spacer x={0.5} />Somchai
        </Link>
        </div>
      </div>
    </nav>
  )
}
