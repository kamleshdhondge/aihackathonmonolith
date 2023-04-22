import express from "express";
import { getDocument } from "../model/documents_manager.js";
import { summarize, getFlags } from "../controller/document_controller.js";
import {
  chatCompletion,
  completion,
  embedding,
  tokens,
} from "../controller/openai_controller.js";
import getEmbeddings, {
  cosineSimilarity,
  saveEmbeddings,
} from "../controller/embeddings_controller.js";

const MAX_LENGTH = 3000;
const MAX_TOKENS = 4000;

const router = express.Router();

router
  .route("/:id/chat")
  .get(async (req, res) => {
    const doc = getDocument(req.params.id);
    res.json(doc.chatHistory);
  })
  .post(async (req, res) => {
    const messageText = req.body.message;

    const userEmbedding = await embedding(messageText);
    const embeddings = getEmbeddings();
    const sortedSimilarity = embeddings.map((embedding) => {
      return {
        content: embedding.content,
        similarityScore: cosineSimilarity(embedding.embedding, userEmbedding),
      };
    });
    sortedSimilarity.sort((a, b) => b.similarityScore - a.similarityScore);
    let context = "";
    for (let i = 0; i < sortedSimilarity.length; i++) {
      const nextLength = tokens(context) + tokens(sortedSimilarity[i].content);
      if (nextLength > MAX_LENGTH) {
        break;
      }
      context += sortedSimilarity[i].content + "\n";
    }

    const messages = [
      {
        role: "system",
        content: `Use the following context to reply the user question: ${context}`,
      },
      {
        role: "user",
        content: messageText,
      },
    ];

    const assistantMessage = await chatCompletion(messages, {
      temperature: 0.0,
      maxTokens:
        MAX_TOKENS -
        messages.reduce((acc, cur) => acc + tokens(cur.content), 0),
    });
    res.json({ id: 1, sender: "assistant", message: assistantMessage });
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
  const summary = await summarize(text);
  res.json({ summarize: summary });
});

router.route("/:id/flags").get(async (req, res) => {
  let text = getDocument(req.params.id).text;
  res.json(getFlags(text));
});

router.route("/:id/embeddings").post(async (req, res) => {
  await saveEmbeddings(req.body.take, (err) => {
    if (err) throw err;
    res.send("CSV file saved!");
  });
});

export default router;
