import React, { createContext, ReactNode } from 'react'
import { types, Instance } from 'mobx-state-tree'
import { customerStore, rootCustomerModel } from './customerStore'
import { orderStore, rootOrderModel } from './orderStore'
import { warehouseStore, rootWarehouseModel } from './warehouseStore'
import { employeeStore, rootEmployeeModel } from './employeeStore'
import { productStore, rootProductModel } from './productStore'

/**
 * Define type of RootStore
 */
type RootStoreModel = Instance<typeof RootStore>

/**
 * Create all stores into Object
 */
const allStoreModels = {
  customerStore: rootCustomerModel,
  orderStore: rootOrderModel,
  warehouseStore: rootWarehouseModel,
  employeeStore: rootEmployeeModel,
  productStore: rootProductModel,
}

/**
 * Create RootStore model from allStoreModels
 */
export const RootStore = types.model('RootStore', allStoreModels)

/**
 * Create all created stores into Object
 */
const allStores = {
  customerStore: customerStore,
  orderStore: orderStore,
  warehouseStore: warehouseStore,
  employeeStore: employeeStore,
  productStore: productStore,
}

/**
 * Create createStore function  from allStores
 */
const createStore = (): RootStoreModel => {
  return RootStore.create(allStores)
}

/**
 * Create and Export StoreContext with RootStoreModel type
 */
export const StoreContext = createContext<RootStoreModel>({} as RootStoreModel)

/**
 * Define Props type
 */
type Props = { children: ReactNode }

/**
 * Use HOC to create a StoreProvider component
 * @param {Props} children children form ReactNode
 */
export const StoreProvider = ({ children }: Props) => {
  return (
    <StoreContext.Provider value={createStore()}>
      {children}
    </StoreContext.Provider>
  )
}
