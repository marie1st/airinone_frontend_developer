import React from 'react'
import styles from './Input.module.css'
import BiCalendarEvent from 'react-icons'

type Props = {
  as?: 'text' | 'date'
  size?: 'sm' | 'md' | 'fluid'
  className?: string
  placeHolder?: string
  label?:string
}

export const Calendar = ({
  as = 'text',
  size = 'sm',
  className,
  placeHolder,
  label
}: Props) => {
  const tempSize = 'tb-size-' + size
  const boxStyle = `${styles.wrapper} ${tempSize} font-md weight-li ${className}`
  const inputwrapper = `${styles.inputicon} ${tempSize} font-md weight-li ${className}`
  console.log(boxStyle)

  return (
    <div>
      <div>{label}</div>
      <input id={inputwrapper} type={as} className={boxStyle} placeholder={placeHolder} />
    </div>
  )
}
