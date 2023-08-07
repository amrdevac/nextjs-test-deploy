import Head from "next/head";
import { useEffect } from "react";
// import Drawer from "src/components/Drawer";
import DashboardLayout from "src/layouts/DashboardLayout";

function Index() {
  return (
    <>
      <Head>
        <title>{"mainTitle"}</title>
      </Head>
      <div className="bg-white p-4">helo</div>
    </>
  );
}

Index.getLayout = (page) => {
  return (
    <>
      <DashboardLayout>{page}</DashboardLayout>
    </>
  );
};

export default Index;
