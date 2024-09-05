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
];

export function getRandomName() {
  return name[Math.floor(Math.random() * name.length)];
}
