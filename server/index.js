import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js"
import cors from "cors";
import bodyParser from "body-parser";

const app=express()

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());
app.use('/',Routes);


const PORT=8000;

const db_uri=process.env.DB_URI;

Connection(db_uri);
app.listen(PORT,
  ()=>console.log(`server is running on ${PORT}`)
)