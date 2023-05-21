import words from 'random-words';
export const generate = (count) => {
  return new Array(count)
    .fill()
    .map((_) => words({ min: 1, max: 2 }))
    .join(' ');
};
