Symbol.dispose ??= Symbol('dispose');
Symbol.asyncDispose ??= Symbol('asyncDispose');

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
