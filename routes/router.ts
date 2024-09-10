import { Router, Request, Response } from "express";

const router = Router();

//GET method
router.get("/messages", (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: "Messages OK!",
  });
});

//POST method
router.post("/messages", (req: Request, res: Response) => {
  //recibiré de body: 'cuerpo' y 'de':
  const body = req.body.cuerpo;
  const de = req.body.de;

  res.json({
    ok: true,
    message: "POST Messages OK!",
    body,
    de,
  });
});

//POST method with dynamic :id
router.post("/messages/:id", (req: Request, res: Response) => {
  //recibiré de body: 'cuerpo' y 'de':
  const body = req.body.cuerpo;
  const de = req.body.de;
  const id = req.params.id;

  res.json({
    ok: true,
    id,
    message: "POST Messages OK!",
    body,
    de,
  });
});

export default router;
