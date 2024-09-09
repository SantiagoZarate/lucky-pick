export function getEmoji(number: number) {
  let emoji;

  if (number === 0) {
    emoji = '🥇';
  } else if (number === 1) {
    emoji = '🥈';
  } else if (number === 2) {
    emoji = '🥉';
  }

  return emoji;
}
