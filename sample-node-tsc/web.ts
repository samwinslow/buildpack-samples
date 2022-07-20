import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world2');
});

app.listen(process.env.PORT || 8080);
