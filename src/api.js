// API Data File

const englishLetters = [
  {
    id: 1,
    letter: "a",
    substitute1: "@",
    substitute2: "4",
    substitute3: "A",
  },
  {
    id: 2,
    letter: "aa",
    substitute1: "@@",
    substitute2: "44",
    substitute3: "AA",
  },
  {
    id: 3,
    letter: "b",
    substitute1: "8",
    substitute2: ">",
    substitute3: "B",
  },
  {
    id: 4,
    letter: "bb",
    substitute1: "88",
    substitute2: ">>",
    substitute3: "BB",
  },
  {
    id: 5,
    letter: "c",
    substitute1: "(",
    substitute2: "[",
    substitute3: "C",
  },
  {
    id: 6,
    letter: "cc",
    substitute1: "((",
    substitute2: "[[",
    substitute3: "CC",
  },
  {
    id: 7,
    letter: "ck",
    substitute1: "(<",
    substitute2: "[<",
    substitute3: "CK",
  },
  {
    id: 8,
    letter: "d",
    substitute1: "]",
    substitute2: "d",
    substitute3: "D",
  },
  {
    id: 9,
    letter: "dd",
    substitute1: "]]",
    substitute2: "dd",
    substitute3: "DD",
  },
  {
    id: 10,
    letter: "e",
    substitute1: "3",
    substitute2: "@",
    substitute3: "E",
  },
  {
    id: 11,
    letter: "ee",
    substitute1: "33",
    substitute2: "@@",
    substitute3: "EE",
  },
  {
    id: 12,
    letter: "f",
    substitute1: "{",
    substitute2: "7",
    substitute3: "F",
  },
  {
    id: 13,
    letter: "ff",
    substitute1: "{{",
    substitute2: "77",
    substitute3: "FF",
  },
  {
    id: 14,
    letter: "g",
    substitute1: "&",
    substitute2: "6",
    substitute3: "G",
  },
  {
    id: 15,
    letter: "gg",
    substitute1: "&&",
    substitute2: "6",
    substitute3: "GG",
  },
  {
    id: 16,
    letter: "h",
    substitute1: "#",
    substitute2: "H",
    substitute3: "H",
  },
  {
    id: 17,
    letter: "i",
    substitute1: "!",
    substitute2: "I",
    substitute3: "I",
  },
  {
    id: 18,
    letter: "j",
    substitute1: ",",
    substitute2: ";",
    substitute3: "J",
  },
  {
    id: 19,
    letter: "k",
    substitute1: "<",
    substitute2: "K",
    substitute3: "K",
  },
  {
    id: 20,
    letter: "l",
    substitute1: "|",
    substitute2: "1",
    substitute3: "L",
  },
  {
    id: 21,
    letter: "ll",
    substitute1: ",=",
    substitute2: "11",
    substitute3: "LL",
  },
  {
    id: 22,
    letter: "m",
    substitute1: "^^",
    substitute2: "3",
    substitute3: "M",
  },
  {
    id: 23,
    letter: "n",
    substitute1: "^",
    substitute2: "N",
    substitute3: "N",
  },
  {
    id: 24,
    letter: "nn",
    substitute1: "^^",
    substitute2: "NN",
    substitute3: "NN",
  },
  {
    id: 25,
    letter: "o",
    substitute1: "0",
    substitute2: "()",
    substitute3: "O",
  },
  {
    id: 26,
    letter: "oo",
    substitute1: "00",
    substitute2: "OO",
    substitute3: "OO",
  },
  {
    id: 27,
    letter: "p",
    substitute1: "?",
    substitute2: "P",
    substitute3: "P",
  },
  {
    id: 28,
    letter: "pp",
    substitute1: "??",
    substitute2: "PP",
    substitute3: "PP",
  },
  {
    id: 29,
    letter: "q",
    substitute1: "9",
    substitute2: "%",
    substitute3: "Q",
  },
  {
    id: 30,
    letter: "r",
    substitute1: "~",
    substitute2: "R",
    substitute3: "R",
  },
  {
    id: 31,
    letter: "rr",
    substitute1: "~~",
    substitute2: "RR",
    substitute3: "RR",
  },
  {
    id: 32,
    letter: "s",
    substitute1: "$",
    substitute2: "5",
    substitute3: "S",
  },
  {
    id: 33,
    letter: "ss",
    substitute1: "$$",
    substitute2: "55",
    substitute3: "SS",
  },
  {
    id: 34,
    letter: "t",
    substitute1: ",+",
    substitute2: "T",
    substitute3: "T",
  },
  {
    id: 35,
    letter: "tt",
    substitute1: ",++",
    substitute2: "TT",
    substitute3: "TT",
  },
  {
    id: 36,
    letter: "u",
    substitute1: ")",
    substitute2: "U",
    substitute3: "U",
  },
  {
    id: 37,
    letter: "uu",
    substitute1: "))",
    substitute2: "UU",
    substitute3: "UU",
  },
  {
    id: 38,
    letter: "v",
    substitute1: "\\",
    substitute2: "V",
    substitute3: "V",
  },
  {
    id: 39,
    letter: "w",
    substitute1: "}",
    substitute2: "W",
    substitute3: "W",
  },
  {
    id: 40,
    letter: "x",
    substitute1: "*",
    substitute2: "X",
    substitute3: "X",
  },
  {
    id: 41,
    letter: "y",
    substitute1: '"',
    substitute2: "Y",
    substitute3: "Y",
  },
  {
    id: 42,
    letter: "z",
    substitute1: "2",
    substitute2: "Z",
    substitute3: "Z",
  },
];

const ideaPrompts = [
  {
    id: 1,
    phrase: "Fruit you can't live without",
    placeholder: "pineapple",
  },
  {
    id: 2,
    phrase: "Your favorite dog breed",
    placeholder: "bordercollie",
  },
  {
    id: 3,
    phrase: "A favorite song or poem",
    placeholder: "harlemlangstonhughes",
  },
  {
    id: 4,
    phrase: "A favorite movie",
    placeholder: "pulpfiction",
  },
  {
    id: 5,
    phrase: "A bathroom item",
    placeholder: "toothbrush",
  },
  {
    id: 6,
    phrase: "A favorite kitchen item",
    placeholder: "fryingpan",
  },
  {
    id: 7,
    phrase: "The coolest invention of the 21-century",
    placeholder: "airfryer",
  },
  {
    id: 8,
    phrase: "A favorite magazine title",
    placeholder: "entrepreneur",
  },
  {
    id: 9,
    phrase: "A favorite hall in college/university/trade school",
    placeholder: "stennishall",
  },
  {
    id: 10,
    phrase: "Abbreviate a favorite coffee order",
    placeholder: "gcvfwamnw",
  },
  {
    id: 11,
    phrase: "A favorite author",
    placeholder: "malcolmgladwell",
  },
  {
    id: 12,
    phrase: "A favorite animal to hate",
    placeholder: "largesnakes",
  },
  {
    id: 13,
    phrase: "Your love language(s)",
    placeholder: "wordsofaffirmation",
  },
];

export const getEnglishLetters = () => {
  return englishLetters;
};

export const getIdeaPrompts = () => {
  return ideaPrompts;
};
