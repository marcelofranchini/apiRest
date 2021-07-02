import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Employee from '../typeorm/entities/Employee';
import { EmployeeRepository } from '../typeorm/repositories/EmployeesRepository';

class ListEmployeeService {
    public async execute(): Promise<Employee[]> {
        const employeeRepository = getCustomRepository(EmployeeRepository);
        const employees = await employeeRepository.find();

        return employees;
    }
}

export default ListEmployeeService;
