const name = [
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Ava',
  'Ethan',
  'Sophia',
  'Mason',
  'Isabella',
  'James',
  'Mia',
  'Lucas',
  'Amelia',
  'Elijah',
  'Harper',
  'German Beder',
  'Messi',
  'Lion S. Kennedy',
  'nettspend',
  'Primeagen',
  'Midudev',
  'Theo',
  'Walter White jr',
  'Stiffy',
  'Gauss',
  'Dijkstra',
  'Steve from minecraft',
  'Sponge Bob',
];

export function getRandomName() {
  return name[Math.floor(Math.random() * name.length)];
}
