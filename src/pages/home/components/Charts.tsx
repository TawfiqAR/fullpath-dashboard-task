import { StatisticCard } from "@ant-design/pro-components";
import Chart from "react-apexcharts";
import {
  conversionsVsClicksLineChart,
  monthlyCostPieChart,
  monthlyImpressionsPieChart,
} from "../helpers/home.configs";
import { ChartProCard } from "./styles";

const Charts = () => {
  return (
    <>
      <ChartProCard gutter={12} ghost>
        <StatisticCard
          bordered
          hoverable
          colSpan={12}
          title="Monthly impressions"
          tooltip="Shows impressions based on monthly basis"
          chart={
            <>
              <Chart
                options={monthlyImpressionsPieChart.options}
                series={monthlyImpressionsPieChart.series}
                type="pie"
              />
            </>
          }
        />
        <StatisticCard
          bordered
          hoverable
          colSpan={12}
          title="Monthly cost"
          tooltip="Shows cost based on monthly basis"
          chart={
            <>
              {
                <Chart
                  options={monthlyCostPieChart.options}
                  series={monthlyCostPieChart.series}
                  type="pie"
                />
              }
            </>
          }
        />
      </ChartProCard>

      <ChartProCard gutter={12} ghost>
        <StatisticCard
          bordered
          hoverable
          colSpan={24}
          title="Ad conversions over user clicks"
          tooltip="Shows number of user clicks and the conversions of the ad on a certain time period"
          chart={
            <>
              <Chart
                options={conversionsVsClicksLineChart.options}
                series={conversionsVsClicksLineChart.series}
                type="line"
              />
            </>
          }
        />
      </ChartProCard>
    </>
  );
};

export default Charts;
