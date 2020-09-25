import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { stripIndent } from "common-tags";
import { ruleCreator } from "../utils";

const defaultOptions: Record<string, boolean | string>[] = [];

const rule = ruleCreator({
  defaultOptions,
  meta: {
    docs: {
      category: "Best Practices",
      description: "",
      recommended: false,
    },
    messages: {
      forbidden: "Do not use const with enum declaration.",
    },
    schema: [
      {
        type: "object",
        description: stripIndent``,
      },
    ],
    type: "problem",
  },
  name: "base",
  // @ts-ignore
  create: (context) => {
    return {
      TSEnumDeclaration: (node: es.TSEnumDeclaration) => {
        const hasConst = Reflect.has(node, "const");

        if (hasConst) {
          context.report({
            node,
            messageId: "forbidden",
          });
        }
      },
    };
  },
});

export = rule;
