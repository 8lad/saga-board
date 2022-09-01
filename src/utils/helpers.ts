export interface CartImageOptions {
  id: number;
  imageUrl: string;
  isMatched: boolean;
  isRotated: boolean;
}

export function createRandomIndex(max: number) {
  return Number((Math.random() * max).toFixed());
}

export function createArrayWithRandomIndexes(arr: string[]): string[] {
  const resultedArr: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const raddomIndex: number = createRandomIndex(arr.length - 1);
    if (!resultedArr[raddomIndex]) {
      resultedArr[raddomIndex] = arr[i];
    } else {
      i--;
    }
  }
  return resultedArr;
}

export function createImageItemsArray(arr: string[]): CartImageOptions[] {
  const baseArray = createArrayWithRandomIndexes([...arr].concat(arr)).map(
    (item: string, index: number) => ({
      id: index,
      imageUrl: item,
      isMatched: false,
      isRotated: false,
    }),
  );
  return baseArray;
}

export type TimeFormat = "minutes" | "seconds" | "";

export function parseTime(
  time: number,
  format: TimeFormat = "",
): string | number {
  if (format === "minutes") {
    return (time / 60000) % 60 < 10
      ? `0${Math.floor(time / 60000) % 60}`
      : Math.floor(time / 60000) % 60;
  }
  if (format === "seconds") {
    return Math.floor(time / 1000) % 60 < 10
      ? `0${Math.floor(time / 1000) % 60}`
      : Math.floor(time / 1000) % 60;
  }
  return time % 100 < 10 ? `0${time % 100}` : time % 100;
}

export function findSmallestNumber(arr: number[]): number {
  const resultedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i + 1]) break;
    const differenceTime = arr[i + 1] - arr[i];
    resultedArr.push(differenceTime);
  }
  return Math.min(...resultedArr.slice(0, -1));
}
