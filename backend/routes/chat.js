import express from "express";
import { getDocument } from "../model/documents_manager.js";

const router = express.Router();

router.route("/:id/chat").get(async (req, res) => {
  const doc = getDocument(req.params.id);
  res.json(doc.chatHistory);
});

export default router;
