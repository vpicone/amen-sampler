const capitalize = ([firstLetter, ...restOfWord]) =>
  firstLetter.toUpperCase() + restOfWord.join("");

const URI = "https://amen-sampler.herokuapp.com";

const keys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

module.exports = { capitalize, keys, URI };
