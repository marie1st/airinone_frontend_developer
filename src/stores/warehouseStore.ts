import { cast, Instance, types } from "mobx-state-tree"
import { WarehouseModel } from "./model/warehouseStore.model"

/**
 * Warehouse data seed for WarehouseStore
 */
const seedWarehouses: WarehouseType[] = [{
  id: 1142,
  store_name: "WarehouseName",
  phone_number: "084-711-4521",
  id_line: "jame_io10",
  email: "jameio10@hotmail.com",
  facebook: "io2000jame",
  usersId: 1234,
}]

/**
 * Define Instance warehouse type from WarehouseModel MST type
 */
type WarehouseType = Instance<typeof WarehouseModel>

/**
 * Create rootWarehouse model and actions
 */
export const rootWarehouseModel = types.model({
  warehouses : types.array(WarehouseModel)
}).actions((self) => ({
  /**
   * Set customers action
   * @param {WarehouseType} warehouse warehouse argument with WarehouseType[]
   */
  setWarehouse(warehouse: WarehouseType[]) {
    self.warehouses = cast(warehouse)
  }
}))

/**
 * Create warehouseStore from rootWarehouseModel
 */
export const warehouseStore = rootWarehouseModel.create({
  warehouses:[],
})

/**
 * Initial warehouses data with Mockup
 */
warehouseStore.setWarehouse(seedWarehouses)
