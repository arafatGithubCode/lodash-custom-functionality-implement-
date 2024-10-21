import dropWhile from "lodash/dropRightWhile.js";

// const arr = [1, 2, 3, 4];

const user = [
  { name: "Arafat1", active: true },
  { name: "Arafat2", active: false },
  { name: "Arafat3", active: false },
];

const result = dropWhile(user, (o) => o.active === false);

console.log(result);
