import words from 'random-words';
export const generate = (count, source) => {
  if (source === 0) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < count) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  } else {
    return new Array(count)
      .fill()
      .map((_) => words({ min: 1, max: 2 }))
      .join(' ');
  }
};
