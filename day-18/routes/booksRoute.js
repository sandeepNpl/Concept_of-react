import express from 'express'

const router = express.Router();

router.get("/", (req,res)=>{
    res.status(200).send("books list");
 })

 router.get("/add", (req,res)=>{
    res.status(200).json({
        msg:"book is added"
    })
 });

 router.get("/delete/:id", (req,res)=>{

    console.log(req.params);
    res.status(200).json({
        msg:"book removed"
    })
 });

 export default router
 