type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

// ユーザ定義のタイプガード
const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === "ja";
};

const isUserB = (user: UserA | UserB): user is UserB => {
  return user.lang === "en";
};

const users: (UserA | UserB)[] = [
  { name: "たなか", lang: "ja" },
  { name: "やまだ", lang: "ja" },
  { name: "ジョニー", lang: "en" },
];

export const japanese = users.filter(isUserA);
const notJapanese = users.filter(isUserB);
