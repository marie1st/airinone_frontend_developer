import React from 'react'
import styles from './Button.module.css'

/**
 * Assign type of props to Button component
 */
type Props = {
  children: React.ReactNode
  color?: 'teal' | 'yellow' | 'green' | 'grey' | 'blue' | 'red' | 'lightblue' | '#F8D49D'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Custom button that can customize the `color` and `size`.
 * Can also pass default button artributes as a props.
 */
export const Button = ({
  children,
  color = 'lightblue',
  size = 'md',
  ...rest
}: Props) => {
  const styleName = `${styles.wrapper} ${styles[color]} ${styles[size]}`

  return (
    <button className={styleName} {...rest}>
      {children}
    </button>
  )
}
