import React from 'react'
import { Route } from 'react-router-dom'
import { FaBell, FaShoppingCart, FaHome, FaRedoAlt } from 'react-icons/fa'

import { Layout, SubNavbar, SubRoute } from '../../../components'
import { Notification } from './Notification/Notification'
import { Take } from './Take/Take'
import { Install } from './Install/Install'
import { Return } from './Return/Return'

/**
 * Array of sub routes
 */
const subRoutes: SubRoute[] = [
  {
    component: Notification,
    icon: FaBell,
    path: '/shop/order/notification',
    text: 'ออเดอร์/เบิกของ',
  },
  {
    component: Take,
    icon: FaShoppingCart,
    path: '/shop/order/take',
    text: 'ตรวจรับของ',
  },
  {
    component: Install,
    icon: FaHome,
    path: '/shop/order/install',
    text: 'ดำเนินการติดตั้ง',
  },
  {
    component: Return,
    icon: FaRedoAlt,
    path: '/shop/order/return',
    text: 'คืนของ',
  },
]

/**
 * Group of route that start with `/technician/order`
 */
export const OrderRoutes = () => {
  return (
    <Layout>
      <SubNavbar routes={subRoutes} />
      {subRoutes.map((route) => (
        <Route
          exact
          path={route.path}
          component={route.component}
          key={route.path}
        />
      ))}
    </Layout>
  )
}
