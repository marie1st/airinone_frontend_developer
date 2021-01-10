import React from 'react'
import { Badge, Button, Card, Modal } from '../../../../components'
import {
  FaCalendarDay,
  FaHandPaper,
  FaListUl,
  FaHome,
  FaElementor,
} from 'react-icons/fa'

import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting} from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import styles from './Install.module.css'
import { useModal } from '../../../../hooks'
import { FiEdit3 } from 'react-icons/fi'
import INeedApi from './INeedApi'

export const Install = () => {
  const modalDetail = useModal()
  const modalManage = useModal()

  return (
    <>
      <div>
       <INeedApi />
      </div>
    </>
  )
}
