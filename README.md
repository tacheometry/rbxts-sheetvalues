# SheetValues

TS typings for boatbomber's SheetValues.

- [**SheetValues repository**](https://github.com/boatbomber/SheetValues)
- [**SheetValues documentation**](https://devforum.community/t/364)
- [**This package's repository**](https://github.com/tacheometry/rbxts-sheetvalues)

## Installation

[![NPM](https://nodei.co/npm/@rbxts/sheetvalues.png)](https://npmjs.org/package/@rbxts/sheetvalues)

Run `npm i @rbxts/sheetvalues` in your project directory.

## Usage

With a sheet like this:

| Name | SomeKey | SomeOtherKey |
| ---- | ------- | ------------ |
| Foo  | 50      | test         |
| Bar  | 90      | test2        |

One can extract values with the following code:

```ts
import SheetValues from "@rbxts/sheetvalues";

// The type parameter represents the sheet
const sheet = new SheetValues<{
  Foo: {
    SomeKey: number;
    SomeOtherKey: string;
  };
  Bar: {
    SomeKey: number;
    SomeOtherKey: string;
  };
}>("Spread id extracted from the URL");

const a = sheet.Values.Foo.SomeKey; // 50
const b = sheet.Values.Bar.SomeOtherKey; // "test2"
```

---

To contribute to SheetValues, please file Pull Requests and Issues in [its GitHub repository](https://github.com/boatbomber/SheetValues), and not in the repository of this package. The types here will reflect the most recent release of the Luau code.
