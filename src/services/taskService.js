import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(isCompleted) {
  return taskRepository.findAll(isCompleted);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
