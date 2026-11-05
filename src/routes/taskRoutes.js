import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateTaskQuery } from '../middleware/validateTask.js';
import handleValidationErrors from '../middleware/handleValidationErrors.js';

const router = express.Router();

router.get('/', validateTaskQuery, handleValidationErrors, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
