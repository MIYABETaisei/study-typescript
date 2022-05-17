export type User = {
  name: string;
} & PersonalData;

const foo = {
  height: 200,
  weight: 75,
};

type PersonalData = {
  // height: number;
  // weight: number;
  [K in keyof typeof foo]?: number;
};

const user: User = {
  name: "たいせい",
  height: 185,
  weight: 75,
};
