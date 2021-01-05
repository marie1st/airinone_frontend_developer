import { Instance, types, cast } from 'mobx-state-tree'
import { EmployeeModel } from './model/employee.model'

const seedEmployees: EmployeeType[] = [
  {
    id: 5678,
    first_name: 'Than',
    last_name: 'Yathorn',
    phone_number: '080-111-2222',
    date_of_birth: new Date().toString(),
    pid: '1234',
    id_line: 'hahaha1234',
    email: 'than@test.com',
    start_date: new Date().toString(),
    salary: 50000,
    emergency_name: 'Book',
    emergency_phone_number: '088-000-0001',
    usersId: 123451,
    workforces: 10,
    religion: null,
    position: null,
    department: null,
    employment: null,
    education: null,
    talent: null,
  },
]

type EmployeeType = Instance<typeof EmployeeModel>

export const rootEmployeeModel = types
  .model({
    employees: types.array(EmployeeModel),
  })
  .actions((self) => ({
    setEmployees(employees: EmployeeType[]) {
      self.employees = cast(employees)
    },
  }))

export const employeeStore = rootEmployeeModel.create({
  employees: [],
})

employeeStore.setEmployees(seedEmployees)
