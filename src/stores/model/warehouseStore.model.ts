import { types } from 'mobx-state-tree'

export const WarehouseModel = types.model({
  id: types.number,
  store_name: types.string,
  phone_number: types.string,
  id_line: types.string,
  email: types.string,
  facebook: types.string,
  usersId: types.number,
})
