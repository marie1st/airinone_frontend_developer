import React from 'react'
import styles from './Input.module.css'

type Props = {
  as?: 'text' | 'date'
  size?: 'sm' | 'md' | 'fluid'
  className?: string
  placeHolder?: string
  label?: string
  id?:string
}

export const Textbox = ({
  as = 'text',
  size = 'sm',
  className,
  placeHolder,
  label,
  id
}: Props) => {
  const tempSize = 'tb-size-' + size
  const boxStyle = `${styles.wrapper} ${tempSize} font-md weight-li ${className}`
  console.log(boxStyle)

  return (
    <div>
      <div>{label}</div>
      <input type={as} className={boxStyle} placeholder={placeHolder} />
    </div>
  )
}
