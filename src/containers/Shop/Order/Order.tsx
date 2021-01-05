import React from 'react'
import { Route } from 'react-router-dom'
import { FaBell, FaShoppingCart, FaHome, FaCheckCircle } from 'react-icons/fa'

import { Layout, SubNavbar, SubRoute } from '../../../components'
import { Notification } from './Notification/Notification'
import { Take } from './Take/Take'
import { TakeDetail } from './Take/Detail'
import { ReturnDetail } from './Return/Detail'
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
    text: 'แจ้งเตือนออเดอร์',
    
  },
  {
    component: Take,
    icon: FaShoppingCart,
    path: '/shop/order/take',
    text: 'ดำเนินการเบิกของ',
  },
  {
    component: Install,
    icon: FaHome,
    path: '/shop/order/install',
    text: 'ดำเนินการติดตั้ง',
  },
  {
    component: Return,
    icon: FaCheckCircle,
    path: '/shop/order/return',
    text: 'อนุมัติคืนของ',
  },
]

/**
 * Group of route that start with `/shop/order`
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
      <Route exact path="/shop/order/take/:id" component={TakeDetail} />
      <Route exact path="/shop/order/return/:id" component={ReturnDetail} />
    </Layout>
  )
}
