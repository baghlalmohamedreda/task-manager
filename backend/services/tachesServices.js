import pool from "./db.js";
export async function getTaches(user_id){
    const result=await pool.query(`
        select *from taches 
        where user_id=$1
        `,[user_id])
    return result.rows    
}


