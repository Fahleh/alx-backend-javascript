const express = require("express");
const router = require("./routes/index");

const app = express();
const PORT = 1245;

app.use("/", router);
app.use("/students", router);
app.use("/students/:major", router);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exPORTs = app;
