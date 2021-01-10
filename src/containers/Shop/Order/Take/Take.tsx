import React from 'react'
import { Badge, Button, Card, Modal, Spacer } from '../../../../components'
import {
  FaCalendarDay,
  FaHandPaper,
  FaListUl,
  FaShoppingCart,
} from 'react-icons/fa'
import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting, AiOutlineCheck } from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import styles from './Take.module.css'
import { useModal } from '../../../../hooks'
import { useHistory } from 'react-router-dom'
import { FiEdit3 } from 'react-icons/fi'
import INeedApi from './INeedApi'

export const Take = () => {
  const modalDetail = useModal()
  const modalTeam = useModal()
  const history = useHistory()

  return (
    <>
      <INeedApi />
    </>
  )
}
