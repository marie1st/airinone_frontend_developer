import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Menu } from './Menu/Menu'
import { OrderRoutes } from './Order/Order'
import { Customer } from './Customer/Customer'
import { Employee } from './Employee/Employee'
import { History } from './History/History'
import { Withdraw } from './Withdraw/Withdraw'
import { WarehouseRoutes } from './Warehouse/Warehouse'
import { ProductRoutes } from './Product/Product'

export const ShopRoutes = () => {
  return (
    <Switch>
      <Route exact path="/shop" component={Menu} />
      <Route path="/shop/order" component={OrderRoutes} />
      <Route exact path="/shop/customer" component={Customer} />
      <Route exact path="/shop/employee" component={Employee} />
      <Route exact path="/shop/history" component={History} />
      <Route exact path="/shop/withdraw" component={Withdraw} />
      <Route path="/shop/warehouse" component={WarehouseRoutes} />
      <Route path="/shop/product" component={ProductRoutes} />
    </Switch>
  )
}
