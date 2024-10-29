// src/pages/components/footer/PageFooter.tsx
import { Layout } from "antd";

const { Footer } = Layout;

const PageFooter = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#f0f2f5", padding: "20px" }}>
      © 2024 My Application. All rights reserved.
    </Footer>
  );
};

export default PageFooter;
