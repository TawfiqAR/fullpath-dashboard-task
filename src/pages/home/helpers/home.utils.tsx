import {
  DollarOutlined,
  FundViewOutlined,
  ProjectOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { MetricCalculatedKeyType, MetricsDataType } from "types/metrics.type";

/**
 * Get total metrics for a certain key.
 *
 * @param metrics records to use.
 * @param metricKey record key to calculate total for.
 * @returns total metric in records.
 */
export const getTotalMetricPropertyFrom = (
  metrics: MetricsDataType[],
  metricKey: MetricCalculatedKeyType
) => metrics.reduce((acc, item) => acc + item[metricKey], 0);

/**
 * Transform metrics to statistic data used in StatisticCard.
 *
 * @param metrics records to convert.
 * @returns statistic card data.
 */
export const getTotalStatisticsFrom = (metrics: MetricsDataType[]) => [
  {
    title: "Total Impressions",
    value: getTotalMetricPropertyFrom(metrics, "impressions"),
    icon: (
      <FundViewOutlined
        style={{
          fontSize: "2em",
        }}
      />
    ),
  },
  {
    title: "Total Clicks",
    value: getTotalMetricPropertyFrom(metrics, "clicks"),
    icon: (
      <UserSwitchOutlined
        style={{
          fontSize: "2em",
        }}
      />
    ),
  },
  {
    title: "Total Cost",
    value: getTotalMetricPropertyFrom(metrics, "cost"),
    icon: (
      <DollarOutlined
        style={{
          fontSize: "2em",
        }}
      />
    ),
    precision: 2,
  },
  {
    title: "Total Conversions",
    value: getTotalMetricPropertyFrom(metrics, "conversions"),
    icon: (
      <ProjectOutlined
        style={{
          fontSize: "2em",
        }}
      />
    ),
  },
];
