import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../../components'
import styles from './Menu.module.css'

/**
 * Declare type for using in this Page
 */
type MenuLink = {
  path: string
  class: string
  text: string
}

/**
 * Menu Page. This is the main page of `ShopRoutes`.
 * Path to this page is `/shop`
 */
export const Menu = () => {
  /**
   * Declare array of menu
   */
  const bigMenus: MenuLink[] = [
    {
      path: '/shop/order/notification',
      class: 'order',
      text: 'จัดการออเดอร์',
    },
    {
      path: '/shop/product/pricing',
      class: 'product',
      text: 'จัดการสินค้า',
    },
  ]

  const smallMenus: MenuLink[] = [
    {
      path: '/shop/customer',
      class: 'customer',
      text: 'ลูกค้า',
    },
    {
      path: '/shop/employee',
      class: 'employee',
      text: 'พนักงาน',
    },
    {
      path: '/shop/warehouse/stock',
      class: 'warehouse',
      text: 'คลังสินค้า/อุปกรณ์',
    },
    {
      path: '/shop',
      class: 'report',
      text: 'รายงานสรุป',
    },
    {
      path: '/shop/history',
      class: 'history',
      text: 'ประวัติการขาย',
    },
    {
      path: '/shop/withdraw',
      class: 'withdraw',
      text: 'เบิก/ถอน',
    },
  ]

  /**
   * Function for building array of `Link` component
   * with custom style.
   */
  const buildMenuFromArray = (menus: MenuLink[]) =>
    menus.map((menu) => (
      <Link
        key={menu.class}
        to={menu.path}
        className={`${styles[menu.class]} ${styles.card}`}
      >
        <div className={styles.circle} />
        {menu.text}
      </Link>
    ))

  /**
   * Page render here
   */
  return (
    <Layout>
      <div className={styles['main-grid']}>
        {buildMenuFromArray(bigMenus)}
        <div className={styles['sub-grid']}>
          {buildMenuFromArray(smallMenus)}
        </div>
      </div>
    </Layout>
  )
}
