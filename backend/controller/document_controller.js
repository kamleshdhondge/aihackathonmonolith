import { flags, summary } from "../model/constants.js";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";
import { chatCompletion, completion, tokens } from "./openai_controller.js";

const MAX_TOKENS = 2000;
config();

export async function summarize(text) {
  const sections = getSections(text);
  const summaries = await Promise.all(sections.map(async (section) => {
    const prompt = "Use this contract section to answer questions:" + section + "\nQuestion: Create a summary. The summary should include the details of the rental property, the duration of the lease, the rental amount and payment terms, security deposit, maintenance and repair responsibilities, restrictions on use if available. The summary should not exceed 300 hundred things .If you are unable to summarize or all the content is generic answer 'Nothing'. \n Answer:"
    const maxTokens = MAX_TOKENS
    const result = await completion(prompt, { temperature: 0, maxTokens})
    return result
  }));

  const summariesNew = summaries.join("\n");
  const messages = [
    {
      role: "system",
      content:
        "You are a contract assistant that uses this contract summary sections to answer questions: "+summariesNew,
    },
    { role: "user", content: "Filter out all the non-important or generic sections." },
  ];
  const maxTokens = 2000
  const result = await chatCompletion(messages, {temperature: 0, maxTokens, presencePenalty:-1 ,frequencyPenalty:2})
  return result
}

export function getFlags(text) {
  return flags;
}
