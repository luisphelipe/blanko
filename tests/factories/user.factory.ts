import { Factory } from "rosie";
import { toRoman } from "roman-numerals";

const UserFactory = new Factory()
  .sequence("name", (i) => `Robot ${toRoman(i)}`)
  .sequence("email", (i) => `robot${i}@test.com`);

export default UserFactory;
