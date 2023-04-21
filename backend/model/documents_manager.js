import Document from "./document.js";
import Message from "./message.js";
import text from "./text.js"

const documents = {
  doc1: new Document("doc1", [
    new Message(
      1,
      "assistant",
      "Hi! Ask me anything about your contract. I'm here to help!"
    ),
    new Message(2, "user", "Are pets allowed?"),
    new Message(
      2,
      "assistant",
      "Unfortunately not. Clause 16 explicitly exclude pets in the agreement. If you care about this, you should negotiated."
    ),
  ], text
  ),
};

export function getDocument(id) {
  return documents[id];
}
