import { ProCard, StatisticCard } from "@ant-design/pro-components";
import { getTotalStatisticsFrom } from "../helpers/home.utils";
import websiteMetrics from "mocks/sample.json";

const Summary = () => {
  return (
    <ProCard gutter={12} ghost>
      {getTotalStatisticsFrom(websiteMetrics.data).map((statistic) => (
        <StatisticCard
          bordered
          hoverable
          colSpan={6}
          statistic={{
            title: statistic.title,
            value: statistic.value,
            icon: statistic.icon,
            precision: statistic.precision,
          }}
        />
      ))}
    </ProCard>
  );
};

export default Summary;
