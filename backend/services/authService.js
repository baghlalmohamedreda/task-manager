import pool from "./db.js";
import bcrypt from "bcrypt"
export async function getUserByEmail(email){
    const result =await pool.query(`
        select id,email,password from users
        where email=$1
        RETURNING
        `,[email])
        return result.rows
}
export async function findUserToLogin(email,password){
    const findemail=pool.query(`
        select id,email,password from users where 
        email=$1
        
        `,[email])
        const user=findemail.rows[0]
    if(!user.email){
        return null
    }    
    const isPasswordCorrect=bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return null
    }
    return user
}
export async function regesterUser(name,email,password){
    const hashedPassword=await bcrypt.hash(password,10)
    const result=await pool.query(`
        insert into users(name,email,password)
        values
        ($1,$2,$3,$4)
        RETURNING *
        `,[name,email,hashedPassword])
    return result.rows[0]    

}