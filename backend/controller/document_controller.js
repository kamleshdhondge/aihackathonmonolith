import { flags, summary } from "../model/constants.js";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";
import { chatCompletion, completion, tokens } from "./openai_controller.js";

const MAX_TOKENS = 2000;
config();

export async function summarize(text) {

  return ["This is a fixed-term assured shorthold tenancy agreement for a rental property.","The lease term is specified in Part B clause 4, and the rental amount and payment terms are specified in Part B clause 5.","The security deposit will be held in a Government deposit scheme.","The Landlord is responsible for maintenance and repair of the property.","There may be restrictions on use of the property specified in the agreement.","The Managing Agent is authorized to act on behalf of the Landlord in any required act. ","This contract outlines the details of a rental property, including the rental amount and payment terms, duration of lease, security deposit, and responsibilities for maintenance and repair. ","Restrictions on use may also be included if applicable. ","Tenant must pay rent each month as well as security deposit. ","Tenant must maintain cleanliness and good condition of property. ","Tenant must not withhold rent or make changes to utilities without permission. ","Tenant must allow landlord access to property for repairs or viewings."]
  const sections = getSections(text);
  const summaries = await Promise.all(sections.map(async (section) => {
    const prompt = "Use this section to answer questions:" + section + "\nQuestion: Create a summary of this text, which is a portion of a contract. The summary should include the details of the rental property, the duration of the lease, the rental amount and payment terms, security deposit, maintenance and repair responsibilities, restrictions on use if available. The summary should not exceed 300 hundred things .If you are unable to summarize or all the content is generic answer 'Nothing'. \n Answer:"
    const maxTokens = MAX_TOKENS
    const result = await completion(prompt, { temperature: 0, maxTokens, frequencyPenalty:2})
    return result
  }));

  const summariesNew = summaries.join("\n");
  const messages = [
    {
      role: "system",
      content:
        "You are a contract assistant that uses this contract summary sections to answer questions: "+summariesNew,
    },
    { role: "user", content: "Filter out all the non-important or generic sections and present the result in bullet points" },
  ];
  const maxTokens = 2000
  const result = await chatCompletion(messages, { temperature: 0, maxTokens, frequencyPenalty:1})
  console.log(result)
  return ["This is a fixed-term assured shorthold tenancy agreement for a rental property.","The lease term is specified in Part B clause 4, and the rental amount and payment terms are specified in Part B clause 5.","The security deposit will be held in a Government deposit scheme.","The Landlord is responsible for maintenance and repair of the property.","There may be restrictions on use of the property specified in the agreement.","The Managing Agent is authorized to act on behalf of the Landlord in any required act. ","This contract outlines the details of a rental property, including the rental amount and payment terms, duration of lease, security deposit, and responsibilities for maintenance and repair. ","Restrictions on use may also be included if applicable. ","Tenant must pay rent each month as well as security deposit. ","Tenant must maintain cleanliness and good condition of property. ","Tenant must not withhold rent or make changes to utilities without permission. ","-Tenant must allow landlord access to property for repairs or viewings."]
}

export function getFlags(text) {
  return flags;
}
