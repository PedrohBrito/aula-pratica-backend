import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Resetando tabela exemplo...');

    // Remove todos os registros
    // await prisma.exemplo.deleteMany();

    console.log('📦 Inserindo novos registros...');

    await prisma.aluno.createMany({
        data: [
            {
                nome: 'Pedro',
                escola: 'Escola Técnica Estadual',
                turma: '3º Ano A',
                foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro',
            },
            {
                nome: 'Nicolas',
                escola: 'Colégio Militar',
                turma: '2º Ano B',
                foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nicolas',
            },
            {
                nome: 'Ana Clara',
                escola: 'Instituto Federal',
                turma: '1º Ano C',
                foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
            },
        ],
    });

    console.log('✅ Seed concluído!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
