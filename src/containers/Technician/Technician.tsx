import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Menu } from './Menu/Menu'
import { OrderRoutes } from './Order/Order'

export const TechnicianRoutes = () => {
  return (
    <Switch>
      <Route exact path="/technician" component={Menu} />
      <Route path="/technician/order" component={OrderRoutes} />
    </Switch>
  )
}
