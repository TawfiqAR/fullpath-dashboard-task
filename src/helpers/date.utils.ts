/**
 * Get data by month for the provided metric key using the date key.
 *
 * @param data records to search for.
 * @param dateKey date to use for grouping.
 * @param metricKey key to group for.
 * @returns recordds by months.
 */
export const getDataKeyByMonth = (
  data: Record<string, any>[],
  dateKey: string,
  metricKey: string
) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dataByMonth: Record<string, number> = {};

  data.forEach((item) => {
    const date = new Date(item[dateKey]);
    const monthName = monthNames[date.getMonth()];

    if (!dataByMonth?.[monthName]) {
      dataByMonth[monthName] = 0;
    }
    dataByMonth[monthName] += item[metricKey];
  });

  return dataByMonth;
};
