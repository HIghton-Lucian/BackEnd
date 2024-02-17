const { Pool } = require('pg');
require("dotenv").config();

// 테이블이름 dream : 꿈 추천
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: 5432,
});
// 조회
async function get_dream() {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM dream;');
    client.release();
    return result.rows;
}
// 추가
async function add_dream(title, content, writer) {
    const client = await pool.connect();
    const query = 'INSERT INTO dream (title, content, writer) VALUES ($1, $2, $3)';
    const values = [title, content, writer];
    await client.query(query, values);
    client.release();
}
// 추가
async function del_dream(title, writer) {
    const client = await pool.connect();
    const query = 'DELETE FROM dream WHERE title = $1 AND writer = $2';
    const values = [title, writer];
    await client.query(query, values);
    client.release();
}

module.exports = {get_dream, add_dream, del_dream};