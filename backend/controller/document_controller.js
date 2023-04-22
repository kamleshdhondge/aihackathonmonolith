import openai from "openai";
import { flags, summary } from "../model/constants.js";
import { encode } from "gpt-3-encoder";
import { config } from "dotenv";

config();

export function summarize(text) {
  let tokens = encode(text);
  let length = tokens.length;
  return process.env.SECRET_KEY;
}

export function getFlags(text) {
  return flags;
}
