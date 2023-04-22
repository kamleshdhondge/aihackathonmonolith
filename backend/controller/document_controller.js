import { flags, summary } from "../model/constants.js";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";
import { completion , tokens } from "./openai_controller.js";

const MAX_TOKENS = 3500;

config();

export async function summarize(text) {

  const sections = getSections(text);
  const sumaries = await Promise.all(sections.map(async section => {
    const maxTokens = Math.max(MAX_TOKENS,tokens(section))
    const prompt = " " + section
    return await completion(section, { temperature: 0, maxTokens})
  }));
  
  return sumaries
}

export function getFlags(text) {
  return flags;
}
