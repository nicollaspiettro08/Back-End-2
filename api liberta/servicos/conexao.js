import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host : 'LocalHost',
    user : 'Libertadores',
    password: 'liberta123',
    database: 'libertadores' 
});
export default pool;