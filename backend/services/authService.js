import pool from "./db.js";
export async function getUserByEmail(email){
    const result =await pool.query(`
        select id,email,password from users
        where email=$1
        `,[email])
}