import 'reflect-metadata';
import CreateEmployeeService from '../src/modules/employees/services/CreateEmployeeService';

let createEmployee: CreateEmployeeService;

describe('CreateEmployeer', () => {
  beforeEach(() => {
    createEmployee = new CreateEmployeeService();
    console.log(createEmployee);
  });

  it('should be able to create a new user', async () => {
    const employee = await createEmployee.execute({
      name: 'Marcelo',
      position: 'qualquer',
      age: 18,
    });

    expect(employee).toHaveProperty('id');
  });

//   it('should not be able to create two users with the same email', async () => {
//     await createUser.execute({
//       name: 'Jorge Aluizio',
//       email: 'teste@teste.com',
//       password: '123456',
//     });

//     expect(
//       createUser.execute({
//         name: 'Jorge Aluizio',
//         email: 'teste@teste.com',
//         password: '123456',
//       }),
//     ).rejects.toBeInstanceOf(AppError);
//   });
});