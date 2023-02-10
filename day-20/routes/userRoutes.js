import express from 'express';
import connection from '../config/connection.js';

const router = express.Router();


// route for Insert data
router.post("/user/add", (req, res)=>{
    const {username, location} = req.body;
    connection.query(`INSERT INTO peoples(username,location) VALUES(?,?)`, 
    [username, location],
    (err, results, fields) =>{
        if(err) throw err;
        console.log(results)
    }
    )
})

//route for read data
router.get("/user/:id",(req,res)=>{
    const {id} = req.params;
    if(id){
        connection.query(
        `SELECT * FROM peoples WHERE  id= ?`,
        [id],
        (err, results, fields) =>{
            res.status(200).json({
                sucess:true,
                results:results
            });
        });

    }else{
        res.status(200).json({
            sucess:false,
            msg:"something went wrong"
        })

    }
    
})

//route for update data
router.put("/user/update/:id", (req,res)=>{
    const{id} = req.params;
    if(id){
         const {username, location} = req.body
        
        connection.query(`UPDATE peoples SET username= ?, location=? WHERE id=?}`,
        [username, location, id],
        (err,results,fields)=>{
            console.log(results);
        })
    }else{
        res.status(200).json({
            success:true,
            msg:"User Id not provided"
        })
    }
})

// route for delete data 
router.delete("/user/delete/:id", (req,res)=>{
    const {id} = req.params;
    if(id){
        connection.query(`
        DELETE FROM peoples WHERE id=?},
        `,
        [id],
        (err, results, fields)=>{
            console.log(results);
            res.status(200).json({
                success:true,
                msg:"Delete data successfully"
            })
        }
        )
    }else{
        res.status(200).json({
            success:false,
            msg:"Unable to delete"
        })
    }
})

export default  router;