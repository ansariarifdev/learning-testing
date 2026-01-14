import express, { type Request, type Response } from "express";
import { client } from "../lib/client";

export const app = express();

app.use(express.json());

app.post("/sum", async (req: Request, res: Response) => {
    const a = req.body.a;
    const b = req.body.b;

    if (a > 10000000 || b > 10000000) {
        return res.status(422).json({
            message: "Input can't be processed"
        })
    }

    const result = a + b;

    const response = await client.request.create({
        data: {
            a, b, result, type: "sum"
        }
    })
    res.json({
        sum: result
    })
})


app.post("/multiply", async (req: Request, res: Response) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a > 10000000 || b > 10000000) {
    return res.status(422).json({
      message: "Input can't be processed",
    });
  }

  const result = a * b;

  const response = await client.request.create({
    data: {
      a,
      b,
      result,
      type: "sum",
    },
  });
  res.json({
    sum: result,
  });
});
