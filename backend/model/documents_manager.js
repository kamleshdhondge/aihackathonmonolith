import Document from "./document";
import Message from "./message";

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
  ]),
};

export function getDocument(id) {
  return documents[id];
}
