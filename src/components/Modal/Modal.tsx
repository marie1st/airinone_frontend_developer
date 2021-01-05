import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import { BsX } from 'react-icons/bs'
import { useModal } from '../../hooks'
import { Spacer } from '../Spacer/Spacer'
import styles from './Modal.module.css'

/**
 * Context for using within Modal component. This context
 * means to pass `modal` prop from Container to thier children.
 */
const { Provider, Consumer } = createContext<ReturnType<typeof useModal>>({
  isActive: false,
  open: () => {},
  close: () => {},
})

/**
 * Assign type of props to Modal component
 */
type Props = {
  children: React.ReactNode
  className?: string
}

type ModalProps = {
  children: React.ReactNode
  modal: ReturnType<typeof useModal>
  className?: string
}

/**
 * Modal Component MUST use with `useModal` hook to control their state.
 *
 * Modal component split into 4 parts. The first one is `Modal`
 * and this component must wrap around other components. The 3 remaining
 * components are `Modal.Header`, `Modal.Body`, and `Modal.Footer`.
 */
export const Modal = ({ children, modal, className }: ModalProps) => {
  const styleName = `${styles.wrapper} ${className}`
  return (
    <>
      {modal.isActive &&
        ReactDOM.createPortal(
          <Provider value={modal}>
            <div className={styles.overlay}>
              <div className={styleName}>{children}</div>
            </div>
          </Provider>,
          document.body
        )}
    </>
  )
}

/**
 * This is a header of the modal box. This has a close button (X)
 */
Modal.Header = ({ children, className }: Props) => {
  const styleName = `${styles.header} font-xl weight-md ${className}`
  return (
    <div className={styleName}>
      {children}
      <Consumer>
        {(modal) => <BsX className={styles.close} onClick={modal.close} />}
      </Consumer>
    </div>
  )
}

/**
 * This is a body of the modal box.
 */
Modal.Body = ({ children, className }: Props) => {
  const styleName = `${styles.body} ${className}`
  return <div className={styleName}>{children}</div>
}

/**
 * This is a footer of the modal box.
 */
Modal.Footer = ({ children, className }: Props) => {
  const styleName = `${styles.footer} ${className}`
  return <div className={styleName}>{children}</div>
}
