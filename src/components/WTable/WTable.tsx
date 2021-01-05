import React from 'react'
import { Accordion } from '..'
import styles from './WTable.module.css'

type Props = { children: React.ReactNode; className?: string }
type HeaderProps = { headers: string[] }
type RowProps = { children: React.ReactNode; content?: string }

const ContainerW = ({ children, className }: Props) => {
  return <table className={`${styles.table} ${className}`}>{children}</table>
}

const HeaderW = ({ headers }: HeaderProps) => {
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

const BodyW = ({ children }: Props) => {
  return <tbody>{children}</tbody>
}

const RowW = ({ children, content }: RowProps) => {
  return (
    <Accordion.Container contentDetail={content}>
      {children}
    </Accordion.Container>
  )
}

const ColW = ({ children }: Props) => {
  return <Accordion.Col>{children}</Accordion.Col>
}

export const WTable = {
  ContainerW,
  HeaderW,
  BodyW,
  RowW,
  ColW,
}
