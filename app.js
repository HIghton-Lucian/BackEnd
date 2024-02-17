const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());

const routes = require("./routes/router.js")
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`${PORT} START`)
});