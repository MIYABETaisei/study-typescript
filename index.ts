const foo = <T extends string | number>(arg: T) => {
  if (typeof arg === "string") {
    return { value: arg.toUpperCase() };
  }
  return { value: arg.toFixed() };
};

// const foo1 = foo<string>("");
// const foo2 = foo(0);
// const foo3 = foo([false]);
