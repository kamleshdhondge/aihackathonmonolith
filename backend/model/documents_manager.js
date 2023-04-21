import Document from "./document";

const documents = {
  doc1: new Document("doc1"),
};

export function getDocument(id) {
  return documents[id];
}
