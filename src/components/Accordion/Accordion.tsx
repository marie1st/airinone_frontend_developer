import React, { Children, useState } from 'react'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import styles from './Accordion.module.css'

type ContainerProps = {
  children: React.ReactNode
  contentTitle?: string
  contentDetail?: string
  color?: 'White' | 'Grey'
}

type ColProps = {
  children: React.ReactNode
}

const Container = ({
  children,
  contentTitle = 'รายละเอียดอุปกรณ์',
  contentDetail = '',
  color = 'White',
}: ContainerProps) => {
  const [setActive, setActiveState] = useState<boolean>(false)

  function toggleAccordion() {
    setActiveState(!setActive)
  }

  /**
   * Check contentTitle for assign value to showChevron
   */
  const showChevron = contentDetail === '' ? false : true

  return (
    <>
      <tr className={`${styles.wrapper}`}>
        <>
          {children}
          {showChevron && (
            <td className={styles.accordion_title}>
              {setActive ? (
                <BiChevronDown
                  className={styles.accordion_chevron}
                  onClick={toggleAccordion}
                />
              ) : (
                <BiChevronRight
                  className={styles.accordion_chevron}
                  onClick={toggleAccordion}
                />
              )}
            </td>
          )}
        </>
      </tr>
      {setActive && (
        <tr className={`${styles.accordion_content}`}>
          <td
            className={`${styles.accordion_content}`}
            colSpan={Children.count(children) + 1}
          >
            <div
              className={`${styles.accordion_contentTitle} font-md weight-re`}
            >
              {contentTitle}
            </div>
            <div
              className={`${styles.accordion_contentDetail} font-sm weight-li`}
            >
              {contentDetail}
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

const Col = ({ children }: ColProps) => {
  return <td className={styles.accordion_title}>{children}</td>
}

export const Accordion = {
  Col,
  Container,
}
