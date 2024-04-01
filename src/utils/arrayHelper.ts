export const addEmptyElements = (arr: Array<any>, count: number) => [
    ...arr,
    ...new Array(count).fill(" "),
  ];