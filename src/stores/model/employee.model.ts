import { types } from 'mobx-state-tree'
import { ReligionModel } from './religion.model'
import { PositionModel } from './position.model'
import { DepartmentModel } from './department.model'
import { EmploymentModel } from './employment.model'
import { EducationModel } from './education.model'
import { TalentModel } from './talent.model'

export const EmployeeModel = types.model({
  id: types.number,
  first_name: types.string,
  last_name: types.string,
  phone_number: types.string,
  date_of_birth: types.string,
  pid: types.string,
  id_line: types.string,
  email: types.string,
  start_date: types.string,
  salary: types.number,
  emergency_name: types.string,
  emergency_phone_number: types.string,
  usersId: types.number,
  workforces: types.number,
  religion: types.maybeNull(ReligionModel),
  position: types.maybeNull(PositionModel),
  department: types.maybeNull(DepartmentModel),
  employment: types.maybeNull(EmploymentModel),
  education: types.maybeNull(EducationModel),
  talent: types.maybeNull(TalentModel),
})
