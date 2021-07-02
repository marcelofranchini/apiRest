import { EntityRepository, Repository } from 'typeorm';
import Employee from '../entities/Employee';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
    public async findByName(name: string): Promise<Employee | undefined> {
        const employee = this.findOne({
            where: {
                name,
            },
        });

        return employee;
    }
}
