import React from 'react'
import styles from './Input.module.css'
type Props = {
  className?: string
  label?:string
}

export const Textarea = ({ className,label }: Props) => {
  const styleName = `${styles.textArea} font-md weight-li ${className}`

  return (
  <div>
    <div>{label}</div>
    <textarea className={styleName} />
  </div>)
  
}
