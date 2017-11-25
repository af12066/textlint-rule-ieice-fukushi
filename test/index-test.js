"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/index");
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text",
    ],

    invalid: [
        // single match fukushi
        {
            text: "いつかそういう日がかならず来る",
            output: "いつかそういう日が必ず来る",
            errors: [
                {
                    message: "漢字で表記すべき副詞: \"かならず\" => \"必ず\"",
                    line: 1,
                    column: 10
                }
            ]
        },
        {
            text: "まったく新しい企画",
            output: "全く新しい企画",
            errors: [
                {
                    message: "漢字で表記すべき副詞: \"まったく\" => \"全く\"",
                    line: 1,
                    column: 1
                }
            ]
        },
        // multiple match
        {
            text: `いたって普通の状態である。

彼はおそらく来ないだろう。`,
            output: `至って普通の状態である。

彼は恐らく来ないだろう。`,
            errors: [
                {
                    message: "漢字で表記すべき副詞: \"いたって\" => \"至って\"",
                    line: 1,
                    column: 1
                },
                {
                    message: "漢字で表記すべき副詞: \"おそらく\" => \"恐らく\"",
                    line: 3,
                    column: 3
                }
            ]
        }
    ]

});
