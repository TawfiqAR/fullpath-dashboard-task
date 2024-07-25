import { HomeOutlined, TableOutlined } from "@ant-design/icons";

const layoutMenu = {
  path: "/",
  location: {
    pathname: "/",
  },
  routes: [
    {
      path: "/",
      name: "Home",
      icon: <HomeOutlined />,
    },
    {
      path: "/metrics-table",
      name: "Metrics Table",
      icon: <TableOutlined />,
    },
  ],
};

export default layoutMenu;
