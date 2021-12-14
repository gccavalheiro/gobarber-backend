import express from "express";
const port = 3333;
const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(port, () => console.log(`🚀 Server started on port: ${port}`));
