const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routs/authRouts");
const corsMiddleware = require("./middleware/cors.middleware")

const app = express();
const PORT = config.get('ServerPort');

app.use(corsMiddleware)
app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
    try{
        await mongoose.connect(config.get('dbUrl'));
        
        app.listen(PORT, () =>{
            console.log("Server started");
        })
    } catch(e){

    }
}
start()
