import {
  DollarOutlined,
  FundViewOutlined,
  ProjectOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import {
  MetricCalculatedKeyType,
  MetricKeyType,
  MetricsDataType,
} from "types/metrics.type";

export const getTotalMetricPropertyFrom = (
  metrics: MetricsDataType[],
  metricKey: MetricCalculatedKeyType
) => metrics.reduce((acc, item) => acc + item[metricKey], 0);

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
