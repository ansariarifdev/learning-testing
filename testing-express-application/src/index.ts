import express from 'express';

export const app = express();

app.use(express.json());

app.post("/sum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a > 10000 || b > 1000) {
    return res.status(422).json({
      message: "Input data can't be processed"
    })
  }

  const result = a + b;
  res.json({
    sum: result
  });
})

app.post("/multiply", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  const result = a * b;
  res.json({ product: result });
})