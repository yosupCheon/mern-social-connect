import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

// process = information and control over the current Node.js process
const PORT = process.env.PORT || 5050;
const app = express();

// .use = middleware function
// to add middleware function
app.use(cors());
app.use(express.json()); //Content-Type and application/json ==> study them

app.use("/record", records);

// start the Express server
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});