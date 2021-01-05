import React from 'react'
import { Accordion } from '..'
import styles from './Profile.module.css'

type Props = { children: React.ReactNode; className?: string }
type RowProps = { children: React.ReactNode; content?: string }

const Container = ({ children, className }: Props) => {
  return <table className={`${styles.table} ${className}`}>{children}</table>
}


const Body = ({ children }: Props) => {
  return <tbody>{children}</tbody>
}

const Row = ({ children, content }: RowProps) => {
  return (
    <Accordion.Container contentDetail={content}>
      {children}
    </Accordion.Container>
  )
}

export const Profile = {
  Container,
  Body,
  Row,
}
