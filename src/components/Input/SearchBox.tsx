import React from 'react'
import styles from './Input.module.css'

type Props = {
  size?: 'sm' | 'md' | 'fluid'
  BoxClassName?: string
  ButtonClassName?: string
}

export const SearchBox = ({
  size = 'md',
  BoxClassName,
  ButtonClassName,
}: Props) => {
  const tempSize = 'tb-size-' + size
  const boxStyle = `${styles.wrapper} ${tempSize} font-md weight-li ${BoxClassName} ${styles.searchBox}`
  const buttonStyle = `${styles.searchButton} font-lg weight-re ${ButtonClassName}`

  return (
    <div>
      <input type="text" className={boxStyle} />
      <button className={buttonStyle}>ค้นหา</button>
    </div>
  )
}
