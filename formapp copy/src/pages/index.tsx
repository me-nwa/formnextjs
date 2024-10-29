import PageContent from "@/pages/components/content/PageContent";
import PageFooter from "@/pages/components/footer/PageFooter";
import PageHeader from "@/pages/components/header/PageHeader";
import { Button, Layout } from "antd";
import Head from "next/head";
import Image from "next/image";
const { Header, Footer, Content } = Layout;

export default function Home() {
  return (
    <>
      <Head>

        <meta
          name="description"

        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Layout style={{ minHeight: "98vh" }}>
          <PageHeader />
          <PageContent />
          <PageFooter />
        </Layout>
      </div>
    </>
  );
}