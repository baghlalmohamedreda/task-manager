import pool from "./db.js";
export async function getTasks(user_id){
    const result=await pool.query(`
        select *from taches 
        where user_id=$1
        `,[user_id])
    return result.rows    
}
export async function delelteTask(userId,id){
    const result=await pool.query(`
        delete from taches 
        where user_id=$1 and id=$2
        RETURNING*
        `,[userId,id])
    return result.rows[0] ||null   

}
export async function deleteAll(userId){
    const result =await pool.query(`
        delete *from taches
        where user_id=$1
        RETURNING*
        `,[userId])
    return result ||null    
}
export async function addTask({userId,title,description,completed}){
    const result =await pool.query(`
        insert into taches(userId,title,description,completed)
        values($1,$2,$3,&4)
        RETURNING*
        `,[userId,title,description,completed])
    return result ||null    
}


