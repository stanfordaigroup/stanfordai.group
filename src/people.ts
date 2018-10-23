/**
 * people.ts
 * -> Holds current board members of SAIG.
 */

type Person = {
  id: string,
  name: string,
  role: string,
};

const people: Array<Person> = [
  {
    id: 'junwon',
    name: 'Junwon Park',
    role: 'President of SAIG',
  },
  {
    id: 'tucker',
    name: 'Tucker Haas',
    role: 'Chief Financial Officer',
  },
  {
    id: 'roma',
    name: 'Roma Dziembaj',
    role: 'Vice President of Operations',
  },
  {
    id: 'john',
    name: 'John Romano',
    role: 'Vice President of Technical Education',
  },
  {
    id: 'swetha',
    name: 'Swetha Revanur',
    role: 'Vice President of Technical Education (Workshops)',
  },
  {
    id: 'yatharth',
    name: 'Yatharth Agarwal',
    role: 'Co-President and Vice President of Operations',
  },
  {
    id: 'shubhang',
    name: 'Shubhang Desai',
    role: 'Vice President of Technical Education (AI + Social Good)',
  },
  {
    id: 'andrewlesh',
    name: 'Andrew Lesh',
    role: 'Vice President of Ethical Education',
  },
  {
    id: 'sawyer',
    name: 'Sawyer Birnbaum',
    role: 'Vice President of Ethical Education',
  },
  {
    id: 'emily',
    name: 'Emily Hu',
    role: 'Vice President of Public Relations',
  },
];

export default people;
