import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import { EmployeeRepository } from '../typeorm/repositories/EmployeesRepository';
import Employee from '../typeorm/entities/Employee';
interface IRequest {
    id: string;
}

class ShowEmployeeService {
    public async execute({ id }: IRequest): Promise<Employee> {
        const employeeRepository = getCustomRepository(EmployeeRepository);
        const employee = await employeeRepository.findOne(id);

        if (!employee) {
            throw new AppError('Funcionário não encontrado', 404);
        }

        return employee;
    }
}

export default ShowEmployeeService;
