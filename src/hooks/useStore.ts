import { useContext } from "react"
import { StoreContext } from "../stores"

/**
 * Use Hook method to create useStore from useContext wiht StoreContext argument
 */
export const useStore = () => useContext(StoreContext)
