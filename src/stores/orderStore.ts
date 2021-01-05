import { Instance, types, cast } from 'mobx-state-tree'
import { OrderModel } from './model/order.model'

/**
 * Orders data seed for orderStore
 */
// const seedOrders: OrderType[] = [{
//   id: types.number,
//   order_code: types.string,
//   order_form: types.string,
//   appointment_date: types.string,
//   order_type: types.string,
//   products_quantity: types.number,
//   order_detail: types.string,
//   is_approved: types.boolean,
//   review_detail: types.string,
//   review_point: types.number,
//   customersId: types.number,
//   products: null,
// }]

/**
 * Define Instance order type from OrderModel MST type
 */
type OrderType = Instance<typeof OrderModel>

/**
 * Create rootOrder model and actions
 */
export const rootOrderModel = types
  .model({
    orders: types.array(OrderModel),
  })
  .actions((self) => ({
    /**
     * Set orders action
     * @param {OrderType[]} orders orders argument with OrderType[]
     */
    setOrders(orders: OrderType[]) {
      self.orders = cast(orders)
    },
  }))

/**
 * Create orderStore from rootOrderModel
 */
export const orderStore = rootOrderModel.create({
  orders: [],
})

// orderStore.setOrders()
