import openai from "openai";
import { encode } from "gpt-3-encoder";
import axios from "axios";

const COMPLETIONS_API_URL = "https://api.openai.com/v1/completions";
const CHAT_COMPLETIONS_API_URL = "https://api.openai.com/v1/chat/completions";
const EMBEDDINGS_API_URL = "https://api.openai.com/v1/embeddings";

export function tokens(text) {
  let tokens = encode(text);
  return tokens.length;
}

export async function completion(prompt, options) {
  const model = "text-davinci-003";
  const temperature = 0.7;
  const maxTokens = 50;
  const apiKey = process.env.SECRET_KEY;

  const data = {
    prompt,
    model,
    temperature: options.temperature ?? temperature,
    max_tokens: options.maxTokens ?? maxTokens,
  };

  const response = await axios({
    method: "post",
    url: COMPLETIONS_API_URL,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return response.data.choices[0].text;
}

export async function chatCompletion(messages, options) {
  const model = "gpt-3.5-turbo";
  const temperature = 0.7;
  const maxTokens = 50;
  const apiKey = process.env.SECRET_KEY;

  const data = {
    messages,
    model,
    temperature: options.temperature ?? temperature,
    max_tokens: options.maxTokens ?? maxTokens,
  };

  const response = await axios({
    method: "post",
    url: CHAT_COMPLETIONS_API_URL,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return response.data.choices[0].message.content;
}

export async function embedding(text) {
  const model = "text-embedding-ada-002";
  const apiKey = process.env.SECRET_KEY;

  const data = {
    input: text,
    model,
  };

  const response = await axios({
    method: "post",
    url: EMBEDDINGS_API_URL,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return response.data.data[0].embedding;
}
