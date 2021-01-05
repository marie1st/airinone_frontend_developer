import { types } from 'mobx-state-tree'

export const ReligionModel = types.model({
    id: types.number,
    name: types.string,
    employeesId: types.number,
})