import express from "express";
import { getDocument } from "../model/documents_manager.js";

const router = express.Router();

router.route("/:id/chat").get(async (req, res) => {
  res.json({ message: `${req.params.id}` });
});

router.route("/:id/summary").get(async (req, res) => {
  res.json({ message: `${req.params.id}` });
});

router.route("/:id/flags").get(async (req, res) => {
  res.json({ message: `${req.params.id}` });
});

export default router;