import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { stripIndent } from "common-tags";
import { ruleCreator } from "../utils";

const defaultOptions: Record<string, boolean | string>[] = [];

const rule = ruleCreator({
  defaultOptions,
  meta: {
    docs: {
      category: "Best Practices",
      description: "Forbids the use of banned observables.",
      recommended: false,
    },
    messages: {
      forbidden: "Do not use template literals",
    },
    schema: [
      {
        type: "object",
        description: stripIndent`
          An object containing keys that are names of observable factory functions
          and values that are either booleans or strings containing the explanation for the ban.`,
      },
    ],
    type: "problem",
  },
  name: "no-const-enum",
  // @ts-ignore
  create: (context) => {
    return {
      TemplateLiteral: (node: es.ImportSpecifier) => {
        context.report({
          node,
          messageId: "forbidden",
        });
      },
    };
  },
});

export = rule;
