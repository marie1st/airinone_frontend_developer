import { types} from "mobx-state-tree"
import { OrderModel } from "./order.model"

export const CustomerModel = types.model({
  id: types.number,
  first_name: types.string,
  last_name: types.string,
  phone_number: types.string,
  date_of_birth: types.string,
  career: types.string,
  pid: types.string,
  id_line: types.string,
  email: types.string,
  facebook: types.string,
  usersId: types.number,
  orders: types.maybeNull(types.array(OrderModel)),
})
