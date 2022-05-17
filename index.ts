export type Foo<T extends string | number = string> = {
  value: T;
};

const foo1: Foo<string> = {
  value: "",
};

const foo2: Foo<number> = {
  value: 123,
};
