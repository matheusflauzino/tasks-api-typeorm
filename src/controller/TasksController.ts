import { getRepository } from 'typeorm';
import { Tasks } from '../entity/Tasks';
import { request, Request, Response } from 'express';

export const getTasks = async (request: Request, response: Response) => {
    const tasks = await getRepository(Tasks).find();
    return response.json(tasks);
}

export const getTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).findOne(id);
    return response.json(task);
 
}


export const updateTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).update(id,request.body);

    if(task.affected === 1) {
        const taskUpdated = await getRepository(Tasks).findOne(id);
        return response.json(taskUpdated);
    } 

    return response.status(404).json({message: 'Task not found'});
 
}


export const saveTask = async (request: Request, response: Response) => {
    const task = await getRepository(Tasks).save(request.body);
    return response.json(task);
}

export const finishedTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).update(id,{
        finished: true
    });

    if(task.affected === 1) {
        return response.json({ message: 'Task finished'});
    } 

    return response.status(404).json({message: 'Task not found'});
 
}

export const deleteTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).delete(id);

    if(task.affected === 1) {
        return response.json({message: 'Taks deleted'});
    } 

    return response.status(404).json({message: 'Task not found'});
 
}
