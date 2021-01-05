import { types } from 'mobx-state-tree'
import { ProductModel } from './product.model'

export const OrderModel = types.model({
  id: types.number,
  order_code: types.string,
  order_form: types.string,
  appointment_date: types.string,
  order_type: types.string,
  products_quantity: types.number,
  order_detail: types.string,
  is_approved: types.boolean,
  review_detail: types.string,
  review_point: types.number,
  customersId: types.number,
  products: ProductModel,
})
