export const getCurrentYearMonth = () => {
  const today = new Date();
  const monthNum = today.getMonth() + 1;
  const month = monthNum >= 10 ? monthNum.toString() : '0' + monthNum.toString();
  const year = today.getFullYear().toString();

  return year + month;
};
