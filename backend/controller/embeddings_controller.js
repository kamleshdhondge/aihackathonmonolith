import fs from "fs";
import { parse } from "csv-parse";
import { getSections } from "./preprocesser.js";
import { embedding } from "./openai_controller.js";
import { text } from "../model/constants.js";

const embeddings = [];

readEmbeddings((err, arr) => {
  if (err) {
    throw err;
  }
  const sections = getSections(text);
  arr.forEach((embedding) => {
    embeddings.push({
      embedding: embedding.slice(1),
      content: sections[embedding[0]],
    });
  });
  console.log("Embeddings ready to use.");
});

export default function getEmbeddings() {
  return embeddings;
}

export function readEmbeddings(callback) {
  fs.readFile("embeddings.csv", "utf-8", (err, data) => {
    if (err) return callback(err);

    parse(data, { delimiter: "," }, (err, arr) => {
      if (err) return callback(err);

      callback(null, arr);
    });
  });
}

export async function saveEmbeddings(take, callback) {
  const sections = getSections(text);

  let sectionsToProcess = sections;
  if (take) {
    sectionsToProcess = sections.slice(0, take);
  }

  const embeddings = await Promise.all(
    sectionsToProcess.map(async (section, index) => {
      const embed = await embedding(section);
      return [index].concat(embed);
    })
  );

  const csvContent = arrayToCSV(embeddings);

  fs.writeFile("embeddings.csv", csvContent, callback);
}

function arrayToCSV(arr) {
  let csvContent = "";

  // Add data rows
  arr.forEach((rowArray) => {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  return csvContent;
}

export function cosineSimilarity(vectorA, vectorB) {
  // Calculate the dot product of the two vectors
  let dotProduct = 0;
  for (let i = 0; i < vectorA.length; i++) {
    dotProduct += vectorA[i] * vectorB[i];
  }

  // Calculate the magnitude (length) of each vector
  let magnitudeA = 0;
  let magnitudeB = 0;
  for (let i = 0; i < vectorA.length; i++) {
    magnitudeA += vectorA[i] ** 2;
    magnitudeB += vectorB[i] ** 2;
  }
  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  // Calculate the cosine similarity
  const similarity = dotProduct / (magnitudeA * magnitudeB);
  return similarity;
}
