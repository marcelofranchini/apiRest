import { Request, Response } from 'express';
import CreateEmployeeService from '../services/CreateEmployeeService';
import DeleteEmployeeService from '../services/DeleteEmployeeService';
import ListEmployeeService from '../services/ListEmployeeService';
import ShowEmployeeService from '../services/ShowEmployeeService';
import UpdateEmployeeService from '../services/UpdateEmployeeService';


export default class EmployessController {
     public async index(req: Request, res: Response): Promise<Response> {
        const listEmployee = new ListEmployeeService;
         const employees = await listEmployee.execute();
        return res.json(employees);
    }
     public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const showEmployee = new ShowEmployeeService();
        const employee = await showEmployee.execute({ id });

        return res.json(employee);
    }
    public async create(req: Request, res: Response): Promise<Response> {
        const { name, position, age} = req.body;
        const createEmployee = new CreateEmployeeService();
        const employee = await createEmployee.execute({
            name,
            position,
            age
        });
        return res.json(employee);
    }
      public async update(req: Request, res: Response): Promise<Response> {
        const { name, position, age} = req.body;
        const { id } = req.params;
        const updateEmployee = new UpdateEmployeeService();
        const employee = await updateEmployee.execute({
            id,
            name,
            position,
            age
        });

        return res.json(employee);
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const deleteEmployee = new DeleteEmployeeService();
        const employee = await deleteEmployee.execute({ id });

        return res.json([]);
    }
  

}
