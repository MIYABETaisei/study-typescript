import type { NextPage } from "next";

// ダメ
// let obj1: {} = {};
// let obj2: object = {};
// 推奨
type Foo = {
  a: number;
  b: string;
};
type Bar = {
  a: string;
  c: boolean;
};

type FooBar = Foo | Bar;

const test: FooBar = {
  a: "",
  b: "",
  c: true,
};

if ("b" in test) {
  test.a.toFixed;
} else {
  test.a.length;
}
const Home: NextPage = () => {
  return <div>test</div>;
};
export default Home;
