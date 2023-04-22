import { flags, summary, SECTION_SUMMARY_PROMPT,MAIN_SUMMARY_PROMPT, FLAGS_PROMPT, ADVICE_PROMPT } from "../model/constants.js";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";
import { chatCompletion, completion, tokens } from "./openai_controller.js";

const MAX_TOKENS = 2000;
config();

export async function summarizeSections(text){
  const sections = getSections(text);
  const summaries = await Promise.all(sections.map(async (section) => {
    const prompt = "Use this contract section to answer questions:" + section+SECTION_SUMMARY_PROMPT;
    const maxTokens = MAX_TOKENS
    const result = await completion(prompt, { temperature: 0, maxTokens})
    return result
  }));
  return summaries;
}
export async function summarize(text) {
  const summaries=await summarizeSections(text);
  const summariesNew = summaries.join("\n");
  const messages = [
    {
      role: "system",
      content:
        "You are a contract assistant that uses this contract summary sections to answer questions: "+summariesNew,
    },
    { role: "user", content: MAIN_SUMMARY_PROMPT },
  ];
  const maxTokens = 2000
  const result = await chatCompletion(messages, {temperature: 0, maxTokens, presencePenalty:-1 ,frequencyPenalty:2})
  return result.split('\n\n')
}

export async function getFlags(text) {
  return flags;
  /* const summaries=await summarizeSections(text);
  const summariesNew = summaries.join("\n");
  const messages = [
    {
      role: "system",
      content:
        "You are a contract assistant that uses this contract summary to answer questions: "+summariesNew,
    },
    { role: "user", content: FLAGS_PROMPT },
  ];
  const maxTokens = 2000
  const result = await chatCompletion(messages, {temperature: 0, maxTokens})
  console.log(result);
  return JSON.parse(result); */
}

export async function getAdvice(text) {
  return advice;
  /* const flags=await getFlags(text);
  const messages = [
    {
      role: "system",
      content:
        "This is a list of red and orange flags in a contract:  "+flags,
    },
    { role: "user", content: ADVICE_PROMPT },
  ];
  const maxTokens = 2000
  const result = await chatCompletion(messages, {temperature: 0, maxTokens, presencePenalty:-1 ,frequencyPenalty:2})
  return result */
}
