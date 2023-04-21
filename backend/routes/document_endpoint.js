import express from "express";
import { getDocument } from "../model/documents_manager.js";
import { summarize } from "../controller/summary.js";

const router = express.Router();

router.route("/:id/chat").get(async (req, res) => {
  const doc = getDocument(req.params.id);
  res.json(doc.chatHistory);
});

router.route("/:id/summary").get(async (req, res) => {
  let text = getDocument(req.params.id).text;
  res.json({summarize: summarize(text)});
});

router.route("/:id/flags").get(async (req, res) => {
  res.json({ message: `${req.params.id}` });
});

export default router;
