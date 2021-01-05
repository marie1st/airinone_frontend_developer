import { types } from 'mobx-state-tree'

export const TalentModel = types.model({
  id: types.number,
  name: types.string,
  employeesId: types.number,
})
