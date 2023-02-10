import express from 'express'

const router = express.Router();

router.get("/", (req,res)=>{
    res.status(200).send("books list");
 })

router.post("/add", (req,res)=>{
    res.status(200).json({
        msg:"book added"
    })
 })

router.get("/delete", (req,res)=>{
    
    res.status(200).json({
        msg:"book removed"
    })
 });

 export default router
