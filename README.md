# textlint-rule-ieice-fukushi

Check whether adverbs are used correctly

電子情報通信学会の論文を書くうえで副詞を正しく書かれているかチェックします。

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ieice-fukushi

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ieice-fukushi": true
    }
}
```

Via CLI

```
textlint --rule ieice-fukushi README.md
```

### Fixable

```
textlint --fix ieice-fukushi README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test


### List

| from | to |
| --- | --- |
| かならず | 必ず |
| すこし | 少し |
| すでに | 既に |
| ただちに | 直ちに |
| はなはだ | 甚だ |
| ふたたび | 再び |
| まったく | 全く |
| もっとも | 最も |
| もっぱら | 専ら |
| あまり | 余り |
| いたって | 至って |
| おおいに | 大いに |
| おそらく | 恐らく |
| かならずしも | 必ずしも |
| かろうじて | 辛うじて |
| きわめて | 極めて |
| ことに | 殊に |
| さらに | 更に |
| すくなくとも | 少なくとも |
| すべて | 全て |
| たえず | 絶えず |
| たがいに | 互いに |
| たとえば | 例えば |
| ついで | 次いで |
| つとめて | 努めて |
| つねに | 常に |
| はじめて | 初めて |
| はたして | 果たして |
| わりに | 割に |
| がいして | 概して |
| じつに | 実に |
| せつに | 切に |
| たいして | 大して |
| とくに | 特に |

## 参考文献

<http://www.ieice.org/jpn/shiori/pdf/furoku_d.pdf>

## License

mIT © Hiroshi Takase / Takuma Hashimoto
