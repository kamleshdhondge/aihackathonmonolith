import openai from "openai";
import { encode } from "gpt-3-encoder";
import axios from "axios";

const API_URL = "https://api.openai.com/v1/completions";

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
    url: API_URL,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return response.data.choices[0].text;
}
