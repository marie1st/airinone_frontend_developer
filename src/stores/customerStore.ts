import { Instance, types, cast } from 'mobx-state-tree'
import { CustomerModel } from './model/customer.model'


/**
 * Customers data seed for customerStore
 */
const seedCustomers: CustomerType[] = [
  {
    id: 1234,
    first_name: 'สรัญญา',
    last_name: 'ทุ่มวงศ์',
    phone_number: '080-000-0000',
    date_of_birth: new Date().toString(),
    career: 'Engineer',
    pid: '0000',
    id_line: '0000',
    email: 'client1@test.com',
    facebook: 'James Client',
    usersId: 1234,
    orders: null,
  },
]

/**
 * Define Instance customer type from CustomerModel MST type
 */
type CustomerType = Instance<typeof CustomerModel>

/**
 * Create rootCustomer model and actions
 */
export const rootCustomerModel = types
  .model({
    customers: types.array(CustomerModel),
    count: types.number,
  })
  .actions((self) => ({
    /**
     * Set customers action
     * @param {CustomerType[]} customers customers argument with CustomerType[]
     */
    setCustomers(customers: CustomerType[]) {
      self.customers = cast(customers)
    },

    /**
     * Set number for test
     * @param {number} number
     */
    setNumber(number: number) {
      self.count = number
    },
  }))

/**
 * Create customerStore from rootCustomerModel
 */
export const customerStore = rootCustomerModel.create({
  customers: [],
  count: 0,
})

/**
 * Initial customers data with Mockup
 */
customerStore.setCustomers(seedCustomers)
