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
      <div>helo</div>
      {/* <Drawer mainTitle="Dashboard">
        Dashboard
      </Drawer> */}
    </>
  );
}

Index.getLayout = (page) => {
  console.log(page);
  <>
    <DashboardLayout>{page}</DashboardLayout>
  </>;
};

export default Index;
