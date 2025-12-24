const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB CONNECTION FAILED");
    console.error(err);
    return;
  }

  db.query("SELECT DATABASE() AS db", (err, res) => {
    console.log("👉 Connected DB:", res?.[0]?.db);
  });

  db.query("SHOW TABLES", (err, res) => {
    console.log("👉 Tables:", res);
  });
});

module.exports = db;

