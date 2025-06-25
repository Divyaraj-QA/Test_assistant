import dotenv from "dotenv";
dotenv.config();

import fs from "node:fs";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { AgentExecutor } from "langchain/agents";
import { tools } from "./tools.js";

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY missing in environment.");
  process.exit(1);
}

const model = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  temperature: 0.2,
}).bind({ tools });

const executor = new AgentExecutor({
  agent: model,
});

const requirementPath = process.argv[2];
if (!requirementPath) {
  console.error("Usage: node index.js <requirement.md>");
  process.exit(1);
}

(async () => {
  const response = await executor.invoke({
    input: {
      requirementPath,
    },
  });
  console.log(response);
})();
