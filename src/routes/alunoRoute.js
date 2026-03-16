import express from 'express';
import * as controller from '../controllers/alunoController.js';

const router = express.Router();

router.post('/alunos', controller.criar);
router.get('/alunos', controller.buscarTodos);
router.get('/alunos/:id', controller.buscarPorId);
router.put('/alunos/:id', controller.atualizar);
router.delete('/alunos/:id', controller.deletar);

export default router;
