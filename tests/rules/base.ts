import { stripIndent } from "common-tags";
import { fromFixture } from "eslint-etc";
import rule = require("../../source/rules/no-const-enum");
import { ruleTester } from "../utils";

ruleTester({ types: true }).run("base", rule, {
  valid: [
    fromFixture(
      stripIndent`
        enum TestEnum {
          Var1,
          Var2,
        }
      `
    ),
  ],
  invalid: [],
});
