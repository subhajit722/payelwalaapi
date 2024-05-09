import mysql from 'mysql';
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Deadpool6@',
    database: 'paylewala',
    connectionLimit: 10,
  });

  export default db