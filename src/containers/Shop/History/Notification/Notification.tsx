import React from 'react'
import { FaHistory } from 'react-icons/fa'
import {
  Badge,
  Button,
  Card,
  Modal,
  Dropdown,
  Textbox,
  Dropbox,
  Spacer,
} from '../../../../components'
import { SearchBox } from '../../../../../src/components/Input/SearchBox'
import { Calendar } from '../../../../components/Input/Calendar'

import {
  FaBell,
  FaCalendarDay,
  FaPlus,
  FaHandPaper,
  FaListUl,
  FaSearch,
} from 'react-icons/fa'
import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting, AiOutlineCheck } from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import { BsX } from 'react-icons/bs'
import styles from './Notification.module.css'
import { useModal } from '../../../../hooks'
import INeedApi from './INeedApi'



export const Notification = () => {
  const modalDetail = useModal()
  const modalAddOrder = useModal()
  const modalManage = useModal()
  
  return (
    <>
      <INeedApi />
    </>
  )
}
