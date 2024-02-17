const express = require("express");
const router = express.Router();
const db = require('./../DB/pool.js');
const text_gpt = require("./../models/text_gpt.js");
const img_gpt = require("./../models/img_gpt.js");


router.get("/get_dream", async (req, res) => {
    const dream = await db.get_dream();
    res.json(dream);
});

router.put("/add_dream", async (req, res) => {
    const { title, content, writer } = req.body;
    //const { title, content, writer } = req.params;
    await db.add_dream(title, content, writer);
    res.status(200).json();
});

router.delete("/del_dream/", async (req, res) => {
    const { title, writer } = req.body;
    //const { title, writer } = req.params;
    await db.del_dream(title, writer);
    res.status(200).json();
});


router.post("/textgpt", async (req, res) => {
    const text = req.body.text;
    const result = await text_gpt(text);
    res.json({text : result});
});

router.post("/imggpt", async (req, res) => {
    const img = req.body.text;
    const result = await img_gpt(img);
    res.json({imgurl : result});
});

module.exports = router;