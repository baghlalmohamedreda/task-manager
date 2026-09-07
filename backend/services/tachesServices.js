import pool from "./db.js";
export async function getTaches(user_id){
    const result=await pool.query(`
        select *from taches 
        where user_id=$1
        `,[user_id])
    return result.rows    
}
export async function delelteTache(userId,id){
    const result=await pool.query(`
        delete from taches 
        where user_id=$1 and id=$2
        RETURNING*
        `,[userId,id])
    return result.rows[0] ||null   

}

