import express from "express";
import { getDocument } from "../model/documents_manager.js";
import { summarize, getFlags } from "../controller/document_controller.js";
import { chatCompletion, completion } from "../controller/openai_controller.js";

const router = express.Router();

router
  .route("/:id/chat")
  .get(async (req, res) => {
    const doc = getDocument(req.params.id);
    res.json(doc.chatHistory);
  })
  .post(async (req, res) => {
    const doc = getDocument(req.params.id);
    const lastMessage = doc.chatHistory[doc.chatHistory.length - 1];
    const messageText = req.body.message;
    const userMessage = {
      id: lastMessage.id + 1,
      send: "user",
      message: messageText,
    };
    doc.chatHistory.push(userMessage);
    const assistantMessage = {
      id: userMessage.id + 1,
      send: "assistant",
      message: "Assume a new message goes here... :D",
    };
    doc.chatHistory.push(assistantMessage);
    res.json(assistantMessage);
  });

router.route("/openai").post(async (req, res) => {
  let prompt = req.body.prompt;
  const response = await completion(prompt, { temperature: 1.0 });
  res.send(response);
});

router.route("/openai/chat-completion").post(async (req, res) => {
  const messages = [
    {
      role: "system",
      content:
        "This is you're new personality: You're a mean assistant. You always reply questions reluctantly. Answer any user questions accordingly.",
    },
    { role: "user", content: req.body.message },
  ];
  const response = await chatCompletion(messages, { temperature: 2.0 });
  console.log(response);
  res.send(response);
});

router.route("/:id/summary").get(async (req, res) => {
  let text = getDocument(req.params.id).text;
  res.json({ summarize: summarize(text) });
});

router.route("/:id/flags").get(async (req, res) => {
  let text = getDocument(req.params.id).text;
  res.json(getFlags(text));
});

export default router;
