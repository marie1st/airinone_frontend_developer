import { useState } from 'react'

/**
 * Custom hook to use with `Modal component`.
 * Pass the return value into the Modal component prop
 * name `modal` then you can use that `modal` object to
 * control the Modal. For example you can use open(), close()
 */
export const useModal = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const open = () => setIsActive(true)

  const close = () => setIsActive(false)

  return { isActive, open, close }
}
