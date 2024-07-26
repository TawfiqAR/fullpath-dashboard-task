export type MetricKeyType =
  | "timestamp"
  | "impressions"
  | "clicks"
  | "cost"
  | "conversions";

export type MetricCalculatedKeyType =
  | "impressions"
  | "clicks"
  | "cost"
  | "conversions";

export type MetricsDataType = {
  timestamp: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
};
