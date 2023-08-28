# A quick and easy way to start using USING today!

[<img src="https://img.shields.io/npm/v/vite-plugin-using?label=%20&style=for-the-badge&logo=pnpm&logoColor=white">](https://www.npmjs.com/package/vite-plugin-using)
<img src="https://img.shields.io/npm/types/vite-plugin-using?label=%20&logo=typescript&logoColor=white&style=for-the-badge">
<img src="https://img.shields.io/npm/dt/vite-plugin-using?style=for-the-badge&logo=npm&logoColor=white&logo=npm&logoColor=white" >
[<img src="https://img.shields.io/bundlephobia/minzip/vite-plugin-using?style=for-the-badge&logo=esbuild&logoColor=white&logo=esbuild&logoColor=white">](https://bundlephobia.com/package/vite-plugin-using)
<img src="https://img.shields.io/badge/coverage-99%25-success?style=for-the-badge&logo=vitest&logoColor=white" alt="99% test coverage">

This plugin allows using the upcoming JS keyword `using` in your code today! It transpiles `using` and `await using` to `try/finally` blocks to get the same effect more easily!

## Installation

```bash
pnpm add vite-plugin-using
```

Add to your `vite.config.ts`

```ts
import ViteUsing from 'vite-plugin-using';

export default defineConfig({
  plugins: [ViteUsing()],
});
```

You will need to polyfill the new `@@dispose` and `@@asyncDispose` symbols as such somewhere in your runtime:

```ts
Symbol.dispose ??= Symbol('@@dispose');
Symbol.asyncDispose ??= Symbol('@@asyncDispose');
```

## Usage

Just start `using`!!

```ts
class disposable {
  constructor() {}
  [Symbol.dispose]() {
    console.log('disposing')
  }
  [Symbol.asyncDispose]() {
    console.log('async disposing')
  }
}

{
  using obj = new disposable();
  console.log('made one obj');
  await using obj2 = new disposable();
  console.log('made two obj');
  console.log(obj, obj2)
}
```

## Dang That's Cool!
