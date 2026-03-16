import express from 'express';
import 'dotenv/config';
import alunoRoutes from './routes/alunoRoute.js';
import fotoRoute from './routes/fotoRoute.js';
import pdfRoute from '/routes/pdfRoute.js'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('🚀 API funcionando');
});

// Rotas
app.use('/alunos', alunoRoutes);

app.use('/alunos', fotoRoute)

app.use('/aluno', 'pdfRoute');
app.use('/uploads', express.static('uploads'));

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
