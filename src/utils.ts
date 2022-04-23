export const calculatePrize = (matchingNumbersCount: number): number => {
  switch (matchingNumbersCount) {
    case 0:
    case 1:
    case 2:
      return 0;
    case 3:
      return 50;
    case 4:
      return 100;
    case 5:
      return 200;
    case 6:
      return 500;
    default:
      return 0;
  }
};
