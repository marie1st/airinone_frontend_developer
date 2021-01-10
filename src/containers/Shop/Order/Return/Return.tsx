import React from 'react'
import { Badge, Button, Card, Modal } from '../../../../components'
import {
  FaCalendarDay,
  FaHandPaper,
  FaListUl,
  FaCheckCircle,
} from 'react-icons/fa'

import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting, AiOutlineCheck } from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import styles from './Return.module.css'
import { useModal } from '../../../../hooks'
import { useHistory } from 'react-router-dom'
import { FiEdit3 } from 'react-icons/fi'
import INeedApi from './INeedApi'

export const Return = () => {
  const modalDetail = useModal()
  const modalManage = useModal()
  const history = useHistory()

  return (
    <>
      <div>
        <INeedApi />
      </div>
    </>
  )
}
