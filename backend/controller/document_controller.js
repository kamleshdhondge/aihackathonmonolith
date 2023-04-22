import { flags, summary } from "../model/constants.js";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";
import { chatCompletion, completion, tokens } from "./openai_controller.js";

const MAX_TOKENS = 2000;
config();

export async function summarize(text) {

  const sections = getSections(text);
  const summaries = await Promise.all(sections.map(async (section) => {
    const prompt = "you are a contract assistant that uses this section to answer questions:" + section + "\nCreate a summary of this text, which is a portion of a contract. The summary should include the details of the rental property, the duration of the lease, the rental amount and payment terms, security deposit, maintenance and repair responsibilities, restrictions on use if available. The summary should not exceed 300 houndred things .If you are unable to summarize or all the content is generic answer 'Nothing'."
    const maxTokens = MAX_TOKENS
    const result = await completion(prompt, { temperature: 0, maxTokens })
    return result
  }));

  const summariesNew = summaries.join("\n")
  return summariesNew
  const prompt = "you are a contract assistant that uses this contract summary to answer questions: " + summariesNew + " Questions; Create a summary with the following characteristics: the summary should indicate what type of agreement it is, what the monthly rent is, what the address of the property is, when the initial term begins and ends, and the names of any key parties to the agreement"
  const maxTokens = 2000
  const result = await completion(prompt, { temperature: 0, maxTokens })
  return result
}

export function getFlags(text) {
  return flags;
}
