const { Pool } = require('pg');
require("dotenv").config();


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: 5432,
});

// async function get_diary() {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM diary;');
//     client.release();
//     return result.rows;
// }
  
// async function add_diary(text, path) {
//     const client = await pool.connect();
//     const query = 'INSERT INTO diary (text, image_path) VALUES ($1, $2)';
//     const values = [text, path];
//     await client.query(query, values);
//     client.release();
//     return true;
// }
  
// async function del_diary(a) {
//     const client = await pool.connect();
//     const query = ``;
//     const values = [a];
//     await client.query(query, values);
//     client.release();
//     return true;
// }


async function get_dream() {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM dream;');
    client.release();
    return result.rows;
}
  
async function add_dream(title, content, writer) {
    const client = await pool.connect();
    const query = 'INSERT INTO dream (title, content, writer) VALUES ($1, $2, $3)';
    const values = [title, content, writer];
    await client.query(query, values);
    client.release();
}
  
async function del_dream(title, writer) {
    const client = await pool.connect();
    const query = 'DELETE FROM dream WHERE title = $1 AND writer = $2';
    const values = [title, writer];
    await client.query(query, values);
    client.release();
}

module.exports = {get_dream, add_dream, del_dream};