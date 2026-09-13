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
        delete from taches
        where user_id=$1
        and completed=true
        RETURNING*
        `,[userId])
    return result ||null    
}
export async function addTask({userId,title,completed}){
    const result =await pool.query(`
        insert into taches(userId,title,description,completed)
        values($1,$2,$3)
        RETURNING*
        `,[userId,title,description,completed])
    return result ||null    
}
export async function updateTask({userId,title,id,completed}){
    const result =await pool.query(`
        UPDATE taches
        SET title = $1,
        completed = $2
        WHERE id = $3
        and user_id=$4
        RETURNING *
        `,[title,completed,id,userId])
    return result.rows[0]  || null 
}
export async function editToggleCompleted({completed,user_id,id}){
    const result =await pool.query(`
        update taches
        set completed=$1
        where user_id=$2 and id=$3
        RETURNING*
        `,[completed,user_id,id])
    return result.rows[0]||null    
}
