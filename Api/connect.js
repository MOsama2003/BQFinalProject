import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asdfghjkl12345",
    database: "social"
});

db.connect(err => {
    if (err) {
        console.log('Error connecting to database:', err.message);
        return;
    }
    console.log('Connected to database');
});
