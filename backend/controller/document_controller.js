import openai from "openai";
import { flags, summary } from "../model/constants.js";
import { encode } from "gpt-3-encoder";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";

config();

export function summarize(text) {

  return getSections("../model/contract.txt");
  let tokens = encode(text);
  let length = tokens.length;
  return process.env.SECRET_KEY;
}

export function getFlags(text) {
  return flags;
}
