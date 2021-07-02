import { Router, Request, Response } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import EmployessController from '../controllers/EmployeesController';

const employeesRouter = Router();
const employeesController = new EmployessController();

employeesRouter.get('/', employeesController.index);

employeesRouter.get(
    '/show/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    employeesController.index,
);


employeesRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            position: Joi.string().required(),
            age: Joi.number().required(),
        },
    }),
    employeesController.create,
);

employeesRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            position: Joi.string().required(),
            age: Joi.number().required(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    employeesController.update,
);

employeesRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    employeesController.delete,
);



export default employeesRouter;
