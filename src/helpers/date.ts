export const getMonthNameByLocale = (dateStr: string, locale = 'pt-BR') => {
  const date = new Date(dateStr);
  const month = date.getUTCMonth();

  const monthName = new Date(
    date.getUTCFullYear(),
    month,
    1,
  ).toLocaleString(locale, { month: 'long' });

  return monthName;
};