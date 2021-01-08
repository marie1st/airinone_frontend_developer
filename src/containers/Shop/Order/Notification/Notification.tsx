import React, { ChangeEvent, useEffect, useState }from 'react'
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
import testdelete from '../../../../test-delete'
import { Link } from 'react-router-dom'
import { setUncaughtExceptionCaptureCallback } from 'process'
import INeedApi from './INeedApi'




export const Notification = () => {


  return (
    <>
      <INeedApi />
      
    </>
  )
}
