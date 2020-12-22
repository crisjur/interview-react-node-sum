import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  const { num1, num2 } = req.body;
  res.send({ num1, num2, sum: num1 + num2 })
};
