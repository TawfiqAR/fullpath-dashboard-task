import { getDataKeyByMonth } from "helpers/date.utils";
import websiteMetrics from "mocks/sample.json";

const conversionsVsClicksLineChartOptions: ApexCharts.ApexOptions = {
  stroke: {
    curve: "smooth",
  },
  fill: {
    type: "solid",
    opacity: [0.35, 1],
  },
  labels: websiteMetrics.data.map((data) =>
    new Date(data.timestamp).toLocaleDateString()
  ),
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Conversions",
      },
    },
    {
      opposite: true,
      title: {
        text: "Clicks",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

export const conversionsVsClicksLineChart = {
  options: conversionsVsClicksLineChartOptions,
  series: [
    {
      name: "Conversions",
      type: "area",
      data: websiteMetrics.data.map((data) => data.cost),
    },
    {
      name: "Clicks",
      type: "line",
      data: websiteMetrics.data.map((data) => data.clicks),
    },
  ],
};

const monthlyImpressions = getDataKeyByMonth(
  websiteMetrics.data,
  "timestamp",
  "impressions"
);
const monthlyCost = getDataKeyByMonth(websiteMetrics.data, "timestamp", "cost");

export const monthlyImpressionsPieChart = {
  options: {
    labels: Object.keys(monthlyImpressions),
  },
  series: Object.values(monthlyImpressions),
};

export const monthlyCostPieChart = {
  options: {
    labels: Object.keys(monthlyCost),
  },
  series: Object.values(monthlyCost),
};
