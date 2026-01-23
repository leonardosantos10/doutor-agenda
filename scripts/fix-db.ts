import 'dotenv/config';
import { Pool } from 'pg';

async function fixDatabase() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    console.log('Conectando ao banco de dados...');
    
    // Dropar a tabela users_to_clinics
    console.log('Dropping tabela users_to_clinics...');
    await pool.query('DROP TABLE IF EXISTS users_to_clinics CASCADE;');
    
    console.log('✅ Tabela users_to_clinics removida com sucesso!');
    console.log('Agora você pode executar: npx drizzle-kit push');
  } catch (error) {
    console.error('❌ Erro ao executar script:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

fixDatabase();


