import React, { useState } from "react";
import "./App.css";
import { PageContainer, ProLayout } from "@ant-design/pro-components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import websiteMetrics from "mocks/sample.json";
import { AreaChartOutlined } from "@ant-design/icons";
import layoutMenu from "configs/layoutMenu";
import Home from "pages/home/components";
import MetricsTable from "pages/metrics-table/components";

const App: React.FC = () => {
  const [pathname, setPathname] = useState("/");

  return (
    <>
      <BrowserRouter>
        <ProLayout
          title={websiteMetrics.title}
          pageTitleRender={false}
          logo={<AreaChartOutlined />}
          style={{
            height: "100vh",
          }}
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
        </ProLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
