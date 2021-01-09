import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
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
import styles from './Fund.module.css'
import IFundApi from './iFundapi'

export const Fund = () => {
  const modalA = useModal()
  const modalB = useModal()
  const modalC = useModal()

  return (
    <>
    <IFundApi />

    </>
  )
}
