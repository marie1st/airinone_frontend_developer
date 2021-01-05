import React, { Children } from 'react'
import styles from './Badge.module.css'

type Props = {
  children: React.ReactNode
  color?: 'yellow' | 'green' | 'red' | 'blue'
  type?: 'capsule' | 'rectangle'
  disabled?: boolean
}

export const Badge = ({
  children,
  color = 'blue',
  type = 'capsule',
  disabled = false,
}: Props) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[color]} ${styles[type]} ${
        disabled && styles.disable
      }`}
    >
      {children}
    </div>
  )
}
