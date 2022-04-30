import type { NextPage } from 'next'

let foo = {} as {bar: number};
foo.bar = 1;

// let foo: number = 123;

function double(x : number) : number | undefined {
  if(x > 0) {
    return
  }
  return x*2;
}

const Home: NextPage = () => {
  return (
    <div className="test">test</div>
  )
}

export default Home
