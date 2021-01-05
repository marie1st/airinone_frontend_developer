import React from 'react'
import { Route } from 'react-router-dom'

import { Layout, SubNavbar, SubRoute } from '../../../components'
import { Stock } from './Stock/Stock'
import { Material } from './Material/Material'
import { Equipment } from './Equipment/Equipment'

/**
 * Array of sub routes
 */
const subRoutes: SubRoute[] = [
  {
    component: Stock,
    icon: null,
    path: '/shop/warehouse/stock',
    text: 'คลังสินค้า',
  },
  {
    component: Material,
    icon: null,
    path: '/shop/warehouse/material',
    text: 'คลังอุปกรณ์ที่ใช้แล้วหมดไป',
  },
  {
    component: Equipment,
    icon: null,
    path: '/shop/warehouse/equipment',
    text: 'คลังอุปกรณ์ช่าง',
  },
]

/**
 * Group of route that start with `/shop/warehouse`
 */
export const WarehouseRoutes = () => {
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
