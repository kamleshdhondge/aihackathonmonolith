import express from "express";
import { getDocument } from "../model/documents_manager.js";
import { summarize,getFlags } from "../controller/document_controller.js";

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
  let text = getDocument(req.params.id).text;
  res.json( getFlags(text) );
});

export default router;
