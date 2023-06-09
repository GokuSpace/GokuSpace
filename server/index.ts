import express from "express";
import router from "./routes";

const app = express();
app.use("/", router);

app.listen(process.env.PORT || 3000, () =>
  console.log(`app listening on port ${process.env.PORT || 3000}`)
);
