import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool;

try {
    // Configuration de la connexion à la base de données
    pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    console.log('Connexion à la base de données réussie.');
} catch (error) {
    console.error('Erreur de connexion à la base de données:', error.message);
    process.exit(1); // Arrête le processus en cas d'échec de connexion
}

export default pool;
