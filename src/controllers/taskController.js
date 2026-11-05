import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  let isCompleted;
  if (req.query.completed !== undefined) {
    isCompleted = req.query.completed === 'true';
  }

  const tasks = await taskService.getAllTasks(isCompleted);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
