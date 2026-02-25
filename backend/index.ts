import express from "express";
import cors from "cors";

const PORT = process.env.PORT;
if (!PORT) {
  console.log("PORT not defined");
  process.exit(1);
}

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ msg: "Up and running" });
});

app.listen(PORT, () => {
  console.log("API listening on port " + PORT);
});
