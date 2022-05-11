import type { NextPage } from "next";

// ダメ
// let obj1: {} = {};
// let obj2: object = {};
// 推奨
let obj3: Record<string, unknown> = {
  a: 1, 
  b: "foo",
};
// let obj4: { [key: string]: unknown } = {
let obj4: { [key: string]: {foo: unknown} } = {
  a: {
    foo: 1,
  }, 
};

const Home: NextPage = () => {
  return <div>test</div>;
};
export default Home