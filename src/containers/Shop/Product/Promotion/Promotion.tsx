import React from 'react'
import { FaShopify } from 'react-icons/fa'
import {
  Button,
  Card,
  Dropdown,
  Modal,
  Spacer,
  Textarea,
  Textbox,
} from '../../../../components'
import { useModal } from '../../../../hooks'
import styles from './Promotion.module.css'
import IPromotionApi from './iPromotionapi'

export const Promotion = () => {
  const modalA = useModal()
  const modalB = useModal()
  const modalC = useModal()

  return (
    <>
      <IPromotionApi />
    </>
  )
}
