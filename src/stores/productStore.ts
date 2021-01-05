import { Instance, types, cast } from 'mobx-state-tree'
import { ProductModel } from './model/product.model'

/**
 * Products data seed for productStore
 */
const seedProducts: ProductType[] = [
  {
    id: 1234,
    product_brand: 'Daikin',
    product_generation: 'FTKQ-TV2S',
    product_name: 'Sabai Inverter II',
    product_price: 14900,
    ordersId: 1234,
  },
  {
    id: 1234,
    product_brand: 'Daikin',
    product_generation: 'FTKQ-TV2S',
    product_name: 'Sabai Inverter II',
    product_price: 14900,
    ordersId: 1234,
  },
]

/**
 * Define Instance product type from ProductModel MST type
 */
type ProductType = Instance<typeof ProductModel>

/**
 * Create rootProduct model and actions
 */
export const rootProductModel = types
  .model({
    products: types.array(ProductModel),
  })
  .actions((self) => ({
    /**
     * Set product action
     * @param {ProductType[]} product products argument with ProductType[]
     */
    setProducts(products: ProductType[]) {
      self.products = cast(products)
    },
    /**
     * Set initial products from seedProducts action
     */
    setInitialProducts() {
      self.products = cast(seedProducts)
    },
  }))

/**
 * Create productStore from rootProductModel
 */
export const productStore = rootProductModel.create({
  products: [],
})

/**
 * Initial products data with Mockup
 */
productStore.setInitialProducts()
