// src/pages/components/header/PageHeader.tsx
import { Layout } from "antd";

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Header style={{ backgroundColor: "#B19573", color: "#fff", padding: "0 20px" }}>
      <h1 style={{ color: "#fff" }}>My Application</h1>
    </Header>
  );
};

export default PageHeader;
