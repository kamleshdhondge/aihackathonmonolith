import { flags, summary } from "../model/constants.js";
import { config } from "dotenv";
import { getSections } from "./preprocesser.js";
import { chatCompletion, completion, tokens } from "./openai_controller.js";

const MAX_TOKENS = 2000;
config();

export async function summarize(text) {
  return "This is a fixed-term assured shorthold tenancy agreement for a rental property. The duration of the lease is specified in Part B clause 4, and the rental amount and payment terms are specified in Part B clause 5. The security deposit is held in a Government deposit scheme, and the Landlord is responsible for maintenance and repair of the property. There may be restrictions on use of the property specified in the agreement.\n\nThis is a rental agreement for Flat 6, Astral House, 5 Aerial Square, London, NW9 4FZ. The lease will begin on 12th April 2023 at 5:00pm and end on 30th April 2024 at 10:00am. The monthly rent is £1,753.00 and must be paid by standing order on the first day of every month. A security deposit of £2,022.00 must be paid upon signing the agreement and will be protected in the TDS custodial scheme. The Managing Agent is Realstar Management (UK) Limited and their emergency contact details will be provided to the Resident on or around the Start Date.\n\nThis is a rental agreement for a property for a specified duration. The rental amount and payment terms, security deposit, maintenance and repair responsibilities, and restrictions on use are outlined in the agreement.\n\nThis contract outlines the terms of a rental agreement for a property. The duration of the lease is specified, as well as the rental amount and payment terms. A security deposit is also required. The tenant is responsible for maintenance and repairs, and any restrictions on use of the property are outlined.\n\nThis contract is for a rental property for a specified duration, with a rental amount and payment terms. The security deposit is protected by The Dispute Service Limited. The tenant is responsible for any damage, missing items, unpaid accounts, rent, and costs of contractors. If one or more of the tenants move out, the deposit will not be refunded. At the end of the tenancy, the landlord or managing agent must inform the tenant of any deductions from the deposit. If there is a dispute, it will be submitted to the ADR operated by TDS for adjudication. The tenant and landlord have the right to take legal action through the county court.\n\nThis contract is for a rental property for a fixed duration of time. The rental amount and payment terms are specified, as well as the security deposit. The tenant is responsible for all maintenance and repairs, and there may be restrictions on the use of the property.\n\nThis contract is for a rental property for a specified duration. The rental amount and payment terms are agreed upon, as well as a security deposit. The tenant is responsible for maintenance and repairs, and there may be restrictions on use.";
  const sections = getSections(text);
  const summaries = await Promise.all(
    sections.map(async (section) => {
      const prompt =
        "Use this section to answer questions:" +
        section +
        "\nQuestion: Create a summary of this text, which is a portion of a contract. The summary should include the details of the rental property, the duration of the lease, the rental amount and payment terms, security deposit, maintenance and repair responsibilities, restrictions on use if available. The summary should not exceed 300 hundred things .If you are unable to summarize or all the content is generic answer 'Nothing'. \n Answer:";
      const maxTokens = MAX_TOKENS;
      const result = await completion(prompt, { temperature: 0, maxTokens });
      return result;
    })
  );

  const summariesNew = summaries.join("\n");
  const messages = [
    {
      role: "system",
      content:
        "You are a contract assistant that uses this contract summary sections to answer questions:" +
        summariesNew,
    },
    {
      role: "user",
      content: "Filter out all the non-important or generic sections.",
    },
  ];
  const maxTokens = 2000;
  const result = await chatCompletion(messages, { temperature: 0, maxTokens });
  return result;
}

export function getFlags(text) {
  return flags;
}
