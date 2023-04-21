import express from "express";

const router = express.Router();

router.route("/:id/chat").get(async (req, res) => {
  res.json({ message: `${req.params.id}` });
});

export default router;
