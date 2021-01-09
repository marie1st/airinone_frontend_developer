import React from 'react'
import { FaCalculator, FaList, FaShoppingCart, FaTrash } from 'react-icons/fa'
import {
  Button,
  Card,
  SearchBox,
  Dropdown,
  Spacer,
  Modal,
  Textbox,
} from '../../../../components'
import { useModal } from '../../../../hooks'
import styles from './Pricing.module.css'
import IPriceingApi from './iPriceapi'

export const Pricing = () => {
  const modal = useModal();

  return (
    <>

      <IPriceingApi />
    </>
  )
}
