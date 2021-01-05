import { types } from 'mobx-state-tree'

export const EmploymentModel = types.model({
  id: types.number,
  name: types.string,
  employeesId: types.number,
})
