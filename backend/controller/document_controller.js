
import openai from 'openai';
import { flags, summary } from "../model/constants.js";
import {encode} from 'gpt-3-encoder';

import openai from 'openai';

const client = new openai.GPT3({
  apiKey: 'sk-...vl6D',
  model: 'text-davinci-002',
});

export function summarize(text) {

  let tokens = encode(text);

  client.complete({
    prompt: text,
    maxTokens: tokens.length,
  })
    .then(response => {
      return response.data.choices[0].text;
    })
    .catch(error => {
      return(error);
    });
}

export function getFlags(text) {
  return flags;

}
