import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Employee from '../typeorm/entities/Employee';
import { EmployeeRepository } from '../typeorm/repositories/EmployeesRepository';
interface IRequest {
    id: string;
    name: string;
    age: number;
    position: string;
}

class UpdateEmployeeService {
    public async execute({
        id,
        name,
        position,
        age
    }: IRequest): Promise<Employee> {
        const employeeRepository = getCustomRepository(EmployeeRepository);
        const employee = await employeeRepository.findOne(id);

        if (!employee) {
            throw new AppError('Funcionário não encontrado', 404);
        }

        const employeeExists = await employeeRepository.findByName(name);
        if (employeeExists && employee.name !== name) {
            throw new AppError('Já existe um Funcionário com este nome', 400);
        }
        employee.name = name;
        employee.age = age;
        employee.position = position;
        await employeeRepository.save(employee);

        return employee;
    }
}

export default UpdateEmployeeService;
