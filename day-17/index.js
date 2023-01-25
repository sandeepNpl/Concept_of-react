import express from 'express'

import booksRouter from './routes/booksRoute'

const app = express();

app.get("/", (req, res)=> {
    res.status(200).send("hello!! Saru")
});

app.use("/books", booksRouter)

app.listen(8000,()=>{
    console.log("server has started");
});
