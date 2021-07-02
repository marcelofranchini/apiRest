import employeesRouter from '@modules/employees/routes/employee.routes';
import { Router} from 'express';

const routes = Router();

routes.use('/employee', employeesRouter);


export default routes;
