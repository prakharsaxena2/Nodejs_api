// const pool =require("../../config/database");
const pool= require("../../config/database");

module.exports={
    create:(data,callBack)=>{
        pool.query(`insert into  registration(firstName,lastName,gender,email,password,number)
            value(?,?,?,?,?,?)`,[
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (err,results,field)=>{
                if(err){
                   return callBack(err);
                }
                return callBack(null,results);
            }
        );
    },
    getUsers:callBack =>{
        pool.query('select * from registration',[],(errer,results,field)=>{
            if(errer){
                return callBack(errer);
            }
            return callBack(null,results);
        })
    },
    getUsersByUserId:(id ,callBack) =>{
        pool.query('select * from registration where id =?' ,[id],(errer,results,field)=>{
            if(errer){
                return callBack(errer);
            }
            return callBack(null,results)[0];
        })
    },
    updateUser:(data,callBack)=>{
        pool.query(`update registration set firstName=?,lastName=?,gender=?,email=?,password=?,number=? where id=?`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (err,results,fields)=>{
                if(err){
                   return callBack(err);
                }
                return callBack(null,results);
            }
        );
    },
    deleteUser:(data,callBack)=>{
        pool.query('delete from registration where id =?',[data.id],
        (errer,results,fields)=>{
            if(errer){
               return  callBack(errer);
            }
            return callBack(null,results);
        }   
        );
    },
    getUsersByUserEmail:(email,callBack)=>{
        pool.query('select *from registration where email=?',[email],(err,results,fields)=>{
            if(err){
                return callBack(err);
            }
            return callBack(null,results[0]);
        })
    }
};