import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Employee from '../typeorm/entities/Employee';
import { EmployeeRepository } from '../typeorm/repositories/EmployeesRepository';

interface IRequest {
    name: string;
    age: number;
    position: string;
}
class CreateEmployeeService {
    public async execute({
        name,
        age,
        position,
    }: IRequest): Promise<Employee> {
        const employeeRepository = getCustomRepository(EmployeeRepository);
        const employeeExists = await employeeRepository.findByName(name);

        if (employeeExists) {
            throw new AppError('Já existe um funcionário com este nome', 409);
        }

        const employee = employeeRepository.create({ name, age, position });

        await employeeRepository.save(employee); 

        return employee;
    }
}

export default CreateEmployeeService;
