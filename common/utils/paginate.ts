// ref : https://stackoverflow.com/a/8273091
export const range = (start: number, stop: number) => {
  if (start >= stop) {
    return [];
  }

  const result = [];
  for (let i = start; i < stop; i++) {
    result.push(i);
  }

  return result;
};

export const calculateSectionsByFivePage = (current: number, max: number) => {
  if (max <= 5) {
    return range(1, max + 1);
  }

  if (current <= 2) {
    return range(1, 6);
  }

  if (max - current <= 2) {
    return range(max - 4, max + 1);
  }

  return range(current - 2, current + 3);
};
