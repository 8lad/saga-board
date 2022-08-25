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
