export const parseDateToYearMonth = (targetTime: Date, monthStep?: number): string => {
  const monthNum = monthStep ? targetTime.getMonth() + monthStep : targetTime.getMonth() + 1;
  const month = monthNum >= 10 ? monthNum.toString() : '0' + monthNum.toString();
  const year = targetTime.getFullYear().toString();

  return year + month;
};
