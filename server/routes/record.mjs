import express from "express";
import db from "../db/conn.mjs";
import {ObjectId} from "mongodb";

const router = express.Router();

// get a list of all records
router.get("/", async (req, res)=>{
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// get a single record by id (unique?) 
router.get("/:id", async(req, res)=>{
    let collection = await db.collection("records");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if(!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// create a new record
// TODO: unique nickname checking, add more information such as email as needed
router.post("/", async (req,res)=>{
    let newDocument = {
        nickName: req.body.userNickName,
        passWord: req.body.passWord
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

// update the record by id
router.patch("/:id", async (req, res) =>{
    const query = {_id: new ObjectId(req.params.id)};
    const update = {
        $set: {
            nickName: req.body.userNickName,
            passWord: req.body.passWord
        }
    };
    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).satus(200);
});

// delete the record
router.delete("/:id", async(req, res) => {
    const query = {_id: new ObjectId(req.params.id)};
    const collection = await db.collection("records");
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
});

export default router;