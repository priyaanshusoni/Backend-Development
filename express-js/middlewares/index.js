///write a express seerver for me quick
const express = require("express");
const app = express();
const port = 3000;

function log(req, res, next) {
  res.send("middleware response");

  next();
}

app.use(log);

app.get("/", (req, res, next) => {
  console.log("requesr reached to this point basepath");
  res.send("passed");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
