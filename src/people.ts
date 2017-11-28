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
    id: 'asl',
    name: 'Andrew S. Lee',
    role: 'Vice President of Public Relations',
  },
  {
    id: 'joseph',
    name: 'Joseph Nicolls',
    role: 'Vice President of Operations',
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
    id: 'prasad',
    name: 'Prasad Kawthekar',
    role: 'Vice President of Technical Education',
  },
  {
    id: 'shubhang',
    name: 'Shubhang Desai',
    role: 'Vice President of Technical Education',
  },
  {
    id: 'andrewlesh',
    name: 'Andrew Lesh',
    role: 'Vice President of Ethical Education',
  },
  {
    id: 'dylan',
    name: 'Dylan Bedford',
    role: 'Vice President of Ethical Education',
  },
];

export default people;