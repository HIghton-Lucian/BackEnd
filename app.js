const express = require("express");
const app = express();
const PORT = 8000;

// JSON 형식을 쉽게 읽고 처리가능
app.use(express.json());

// 라우터링 가져오기
const routes = require("./routes/router.js")
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`${PORT} START`)
});