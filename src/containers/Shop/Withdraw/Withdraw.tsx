import React from 'react'
import { Layout } from '../../../components'
import { Route } from 'react-router-dom'

import { TakeDetail } from './Take/Detail'
import { Stock } from './Stock/Stock'
import { ReturnDetail } from './Return/Detail'


export const Withdraw = () => {
  return (
    <Layout>
      <ReturnDetail />
      <Route exact path="/shop/History/take/:id" component={TakeDetail} />
      <Route exact path="/shop/History/return/:id" component={ReturnDetail} />
    </Layout>)
}

