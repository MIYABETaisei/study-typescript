import type { NextPage } from "next";

type Animals = "dog" | "cat";

type Foo = {
  [key in Animals]: number;
}

// interface Foo {
//   a: number;
// }

// interface Bar extends Foo {
//   a: string;
// }
const foo: Foo = {
  dog: 1,
  cat: 2,
};

const Home: NextPage = () => {
  return <div>test</div>;
};
export default Home;
