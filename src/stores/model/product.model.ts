import { types } from 'mobx-state-tree'

export const ProductModel = types.model({
  id: types.number,
  product_brand: types.string,
  product_generation: types.string,
  product_name: types.string,
  product_price: types.number,
  ordersId: types.number,
})
