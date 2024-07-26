import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from "@ant-design/pro-components";
import { MetricsDataType } from "types/metrics.type";
import { metricsTableColumns } from "../helpers/metricsTable.config";
import websiteMetrics from "mocks/sample.json";

const MetricsTable = () => {
  return (
    <ProTable<MetricsDataType>
      columns={metricsTableColumns}
      dataSource={websiteMetrics.data}
      toolbar={undefined}
      rowKey="key"
      search={false}
      pagination={{
        pageSize: 15,
      }}
    />
  );
};

export default MetricsTable;
