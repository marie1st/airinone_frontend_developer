import React from 'react'
import { SearchBox } from '../../../components/Input/SearchBox'
import {
  Button,
  Layout,
  Card,
  Dropdown,
  Modal,
  Textbox,
  Dropbox,
  SubNavbar,
  SubRoute
} from '../../../components'
import { Route } from 'react-router-dom'
import { FaBell, FaShoppingCart, FaHome, FaCheckCircle } from 'react-icons/fa'
import { Notification } from './Notification/Notification'
import { Take } from './Take/Take'
import { TakeDetail } from './Take/Detail'
import { ReturnDetail } from './Return/Detail'

export const History = () => {
  return (
    <Layout>
      <Notification />
      <Route exact path="/shop/History/take/:id" component={TakeDetail} />
      <Route exact path="/shop/History/return/:id" component={ReturnDetail} />
    </Layout>
  )
}