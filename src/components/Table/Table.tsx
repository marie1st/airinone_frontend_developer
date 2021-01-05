import React from 'react'
import { Accordion } from '../'
import styles from './Table.module.css'

type Props = { children: React.ReactNode; className?: string }
type HeaderProps = { headers: string[] }
type RowProps = { children: React.ReactNode; content?: string }

const Container = ({ children, className }: Props) => {
  return <table className={`${styles.table} ${className}`}>{children}</table>
}

const Header = ({ headers }: HeaderProps) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header} className={styles.header}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
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

const Col = ({ children }: Props) => {
  return <Accordion.Col>{children}</Accordion.Col>
}

export const Table = {
  Container,
  Header,
  Body,
  Row,
  Col,
}
