const mysql = require('mysql2');

const db = mysql.createConnection({
  host:     'localhost',
  user:     'root',
  password: 'riya2006',
  database: 'pathforge'
});

db.connect((err) => {
  if (err) {
    console.log('Database connection failed!');
    console.log('Error code:', err.code);
    console.log('Error message:', err.message);
  } else {
    console.log('MySQL Connected Successfully!');
  }
});

module.exports = db;