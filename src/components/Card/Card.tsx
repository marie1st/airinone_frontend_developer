import React from 'react'
import styles from './Card.module.css'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  fullHeight?: boolean
  noShadow?: boolean
}

type ColProps = {
  children: React.ReactNode
  className?: string
}

const Container = ({
  children,
  className,
  fullHeight,
  noShadow,
}: ContainerProps) => {
  return (
    <div
      className={`${styles.wrapper} ${className} ${
        fullHeight && styles['full-height']
      } ${noShadow && styles['noShadow']}`}
    >
      {children}
    </div>
  )
}

const Header = ({ children, className }: ContainerProps) => {
  return <div className={`${styles.header} ${className}`}>{children}</div>
}

const Body = ({ children, className }: ContainerProps) => {
  return <div className={`${styles.body} ${className}`}>{children}</div>
}

const Footer = ({ children, className }: ContainerProps) => {
  return <div className={`${styles.footer} ${className}`}>{children}</div>
}

const Col = ({ children, className }: ColProps) => {
  return <div className={`${styles.headerColumn} ${className}`}>{children}</div>
}

export const Card = {
  Container,
  Header,
  Body,
  Footer,
  Col,
}
