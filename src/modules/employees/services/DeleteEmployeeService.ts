import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import { EmployeeRepository } from '../typeorm/repositories/EmployeesRepository';

interface IRequest {
    id: string;
}

class DeleteEmployeeService {
    public async execute({ id }: IRequest): Promise<void> {
        const employeeRepository = getCustomRepository(EmployeeRepository);
        const employee = await employeeRepository.findOne(id);

        if (!employee) {
            throw new AppError('Funcionário não encontrado', 404);
        }

        await employeeRepository.remove(employee);
    }
}

export default DeleteEmployeeService;
