import { flags, summary } from "../model/constants.js";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";
import { chatCompletion, completion, tokens } from "./openai_controller.js";

const MAX_TOKENS = 500;

config();

export async function summarize(text) {

  const sections = getSections(text);
  const sumaries = await Promise.all(sections.map(async (section, index) => {
    const prompt = "you are a contract assistant that uses this section to answer questions \n" + section
    const maxTokens = MAX_TOKENS
    const result = await chatCompletion([{
      role: "system",
      content: prompt,
    }], { temperature: 0, maxTokens })
    return result
  }));

  const sumariesNew = sumaries.join("\n")
  console.log(sumariesNew.length)
  const prompt = "Create a summary with the following characteristics: the summary should indicate what type of agreement it is, what the monthly rent is, what the address of the property is, when the initial term begins and ends, and the names of any key parties to the agreement \n" + sumariesNew
  const maxTokens = 600
  const result = await chatCompletion([{
    role: "system",
    content: prompt,
  }], { temperature: 0, maxTokens })
  return result
}

export function getFlags(text) {
  return flags;
}
