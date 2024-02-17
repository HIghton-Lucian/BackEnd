// 라우터링

const express = require("express");
const router = express.Router();
const db = require('./../DB/pool.js');
const text_gpt = require("./../models/text_gpt.js");
const img_gpt = require("./../models/img_gpt.js");

// dream 테이블 조회
router.get("/get_dream", async (req, res) => {
    const dream = await db.get_dream();
    res.json(dream);
});

// dream 테이블 추가
router.put("/add_dream", async (req, res) => {
    const { title, content, writer } = req.body;
    await db.add_dream(title, content, writer);
    res.status(200).json();
});

// dream 테이블 삭제
router.delete("/del_dream", async (req, res) => {
    const { title, writer } = req.body;
    await db.del_dream(title, writer);
    res.status(200).json();
});

// 텍스트 ChatGPT 사용
router.post("/text_gpt", async (req, res) => {
    const text = req.body.text;
    const result = await text_gpt(text);
    res.json({text : result});
});

// 이미지 (DALL·E 2) 사용
router.post("/img_gpt", async (req, res) => {
    const img = req.body.text;
    const result = await img_gpt(img);
    res.json({imgurl : result});
});

module.exports = router;