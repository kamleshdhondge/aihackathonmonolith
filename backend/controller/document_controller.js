import openai from "openai";
import { flags, summary } from "../model/constants.js";
import { encode } from "gpt-3-encoder";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";

config();

export function summarize(text) {

  return getSections(text);
  
}

export function getFlags(text) {
  return flags;
}
