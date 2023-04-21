import express from "express";
import { getDocument } from "../model/documents_manager.js";

const router = express.Router();

router.route("/:id/").get(async (req, res) => {
    let text = getDocument(req.params.id);
    res.json({text});
  });

export default router;
