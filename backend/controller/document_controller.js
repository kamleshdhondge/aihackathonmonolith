import { flags, advice, SECTION_SUMMARY_PROMPT,MAIN_SUMMARY_PROMPT, FLAGS_PROMPT, ADVICE_PROMPT } from "../model/constants.js";
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
  return ["This Agreement is between the Landlord and Kamlesh Kailas Dhondge (“Lead Resident\") for the rental of FLAT 6, ASTRAL HOUSE, 5 AERIAL SQUARE, LONDON, NW9 4FZ. The lease will begin on 12th April 2023 at 5:00pm and end on 30th April 2024 at10:00am. The monthly rent is £1,753.00 and must be paid by standing order on the first day of every month. A security deposit of £2,022.00 must be paid upon signing the Agreement and will be protected in the TDS custodial scheme.","The resident is responsible for paying rent each month; paying a security deposit; registering with council tax department; registering with gas/electricity/water/sewerage/phone companies/internet services/television licence/cable television/satellite television charges; repaying reasonable legal costs if landlord takes any action against resident; cleaning windows/replacing broken glass/replacing light bulbs/taking care of inside premises/unblocking gutters/sewers/drains/toilet bowls/cisterns/basins/baths/showers/water pipes/ducts/reporting repairs or faults to landlord/allowing access to premises/viewings during last two months.","The rental property is a residential unit in a building with shared areas.The tenant must not use property for anything illegal or immoral or operate any registered trade/business from premises.The tenant cannot keep animals,reptiles,insects,birds etc.,change/install locks/alarm systems/make alterations/additions/decorate inside/outside/damage shared areas/building/do anything to electrical/lighting/water/heating installations/fixtures/smoke within building/have barbecues/naked flames/store items outside/transferring tenancy without permission.","This rental agreement is for a property with start date specified in agreement. The landlord is responsible for cleaning premises/paying ground rents/service charges/not increasing rent during term/making sure gas and electrical appliances work properly/repairing installations in premises which supply water,gas,electricity,and any sanitary ware. The tenant is responsible for their own contents and insurance, and the landlord will not pay any compensation if the tenant cannot live in the premises. ","The rental property is located in a specific building with a minimum lease duration of 12 months.The rental amount/payment terms are to be determined by referencing process.A security deposit is required.The tenant is responsible for all Rent,council tax,and utility costs.Maintenance/repair responsibilities/restrictions on use are to be determined by referencing process.","This rental agreement pertains to a property with specified duration.Rental amount/payment terms/security deposit are agreed upon.Tenant has maintenance/repair responsibilities.There may be restrictions on use."]
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
  return advice.split('\n\n');
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
