import express from  'express';
import booksRouter from './routes/booksRoute.js'

 const app = express();
 app.use(express.json());

 app.use((req,res,next)=>{
   console.log("hello");
 })

 app.get("/",(req,res)=>{
    res.status(200).send("backend is working")
 });

 app.use("/books", booksRouter)

 app.listen(8000, ()=>{
    console.log("server has started 🚀");
 })