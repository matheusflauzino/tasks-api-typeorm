import { Router, Request, Response } from 'express'
import { getTasks, getTask, saveTask , updateTask, finishedTask, deleteTask} from './controller/TasksController';

const routes = Router()

routes.get('/',(request: Request, response: Response) => {
    return response.json({
        message: 'Hello World'
    })
})

routes.get('/tasks',getTasks);
routes.post('/tasks',saveTask);
routes.get('/tasks/:id',getTask);
routes.put('/tasks/:id',updateTask);
routes.patch('/tasks/:id/finished',finishedTask);
routes.delete('/tasks/:id',deleteTask);



export default routes;