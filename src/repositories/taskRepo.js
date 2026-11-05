import prisma from '../config/db.js';

export async function findAll(isCompleted) {
  const query = {};
  if (isCompleted !== undefined) {
    query.where = { completed: isCompleted };
  }
  return prisma.task.findMany(query);
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

