import pool from "./db.js";
export async function getTaches(user_id){
    const result=await pool.query(`
        select *from taches 
        where user_id=$1
        `,[user_id])
    return result.rows    


}
export async function regesterUser(name,email,password){
    const result = await pool.query(`
        insert into users(name,email,passwrod)
        values ($1,$2,43)
        RETURNING*
        `[name,email,password])
    return result.rows[0]    
}
