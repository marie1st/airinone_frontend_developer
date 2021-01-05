import React from 'react'
import { Route } from 'react-router-dom'
import { FaShoppingCart, FaDollarSign, FaShopify } from 'react-icons/fa'

import { Layout, SubNavbar, SubRoute } from '../../../components'
import { Pricing } from './Pricing/Pricing'
import { Fund } from './Fund/Fund'
import { Promotion } from './Promotion/Promotion'

/**
 * Array of sub routes
 */
const subRoutes: SubRoute[] = [
  {
    component: Pricing,
    icon: FaShoppingCart,
    path: '/shop/product/pricing',
    text: 'รายการสินค้าและราคาขาย',
  },
  {
    component: Fund,
    icon: FaDollarSign,
    path: '/shop/product/fund',
    text: 'ราคาต้นทุน',
  },
  {
    component: Promotion,
    icon: FaShopify,
    path: '/shop/product/promotion',
    text: 'โปรโมชั่น',
  },
]

/**
 * Group of route that start with `/shop/product`
 */
export const ProductRoutes = () => {
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
