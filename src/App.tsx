import React, { useState } from "react";
import { PageContainer, ProConfigProvider } from "@ant-design/pro-components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import websiteMetrics from "mocks/sample.json";
import { AreaChartOutlined } from "@ant-design/icons";
import layoutMenu from "configs/layoutMenu";
import Home from "pages/home/components";
import MetricsTable from "pages/metrics-table/components";
import { ApplicationLayout } from "styles";
import enUS from "antd/locale/en_US";
import { ConfigProvider } from "antd";

const App: React.FC = () => {
  const [pathname, setPathname] = useState("/");

  return (
    <>
      <BrowserRouter>
        <ConfigProvider locale={enUS}>
          <ApplicationLayout
            title={websiteMetrics.title}
            pageTitleRender={false}
            logo={<AreaChartOutlined />}
            location={{
              pathname,
            }}
            menuHeaderRender={(logoDom, titleDom) => (
              <Link to="/">
                {logoDom}
                {titleDom}
              </Link>
            )}
            route={layoutMenu}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setPathname(item.path || "/");
                }}
              >
                <Link to={item.path || "/"}>{dom}</Link>
              </div>
            )}
          >
            <PageContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/metrics-table" element={<MetricsTable />} />
              </Routes>
            </PageContainer>
          </ApplicationLayout>
        </ConfigProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
