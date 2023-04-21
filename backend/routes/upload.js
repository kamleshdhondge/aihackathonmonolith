

import express from "express";
const router = express.Router();

router.route("/").get(async (req, res) => {
  res.json({ message: "ok" });

  });


export default router;
