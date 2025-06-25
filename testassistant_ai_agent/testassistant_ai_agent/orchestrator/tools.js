import { z } from "zod";
import fs from "node:fs";

export const tools = [
  {
    name: "generate_test_plan",
    description: "Create a QA master test plan in Markdown given a requirement doc",
    parameters: z.object({ requirementPath: z.string() }),
    execute: async ({ requirementPath }) => {
      const req = fs.readFileSync(requirementPath, "utf8");
      // In a real system we would template deterministic content.
      // For the POC just return a stub plan.
      return `# Test Plan\nScope: \n${req.split("\n")[0]}\n\n## Risks\n- TBD`;
    },
  },
];
