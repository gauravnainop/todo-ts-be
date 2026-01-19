import express from "express";
const PORT = process.env.PORT || 3000;
const app = express();
import mainRoute from "./routes/server.js";

app.get("/", (req, res) => {
  res.send("Server is up and running");
});
app.use(express.json());
app.use("/api", mainRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
