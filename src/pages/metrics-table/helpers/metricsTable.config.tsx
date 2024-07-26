import { ProColumns } from "@ant-design/pro-components";
import { MetricsDataType } from "types/metrics.type";

export const metricsTableColumns: ProColumns<MetricsDataType>[] = [
  {
    title: "Date of metrics",
    dataIndex: "timestamp",
    valueType: "dateTime",
  },
  {
    title: "Impressions",
    dataIndex: "impressions",
    valueType: "digit",
  },
  {
    title: "Clicks",
    dataIndex: "clicks",
    valueType: "digit",
  },
  {
    title: "Cost",
    dataIndex: "cost",
    valueType: "money",
    renderText: (text) => `$${text}`,
  },
  {
    title: "Conversions",
    dataIndex: "conversions",
    valueType: "digit",
  },
];
