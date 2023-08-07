import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import Loading from "../Dialog/Loading";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Drawer = ({ children, mainTitle }) => {
  const { rightButton } = useSelector((state) => state.DrawerClass);
  const router = useRouter();
  const handleRouteSidebar = (urlPage) => {
    if (urlPage != router.pathname) {
      window.loading.showModal();
      router.push(urlPage);
    }
  };
  return (
    <>
      <Loading></Loading>
      <div className="drawer lg:drawer-open">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="grid justify-end m-3 ">
            <label htmlFor="sidebar" className="btn btn-primary  lg:hidden">
              Sidebar
            </label>
          </div>
          <div className="container px-20 py-10">
            <div className="grid grid-cols-2">
              <div>
                <div className="text-3xl font-bold">{mainTitle}</div>
              </div>
              <div className="text-right">{rightButton}</div>
            </div>
            {children}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200  text-base-content">
            <li>
              <div className="text-lg text-center flex justify-center">
                <Image
                  src="/images/zzz.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
            </li>
            <div className="my-16 mx-5 text-lg ">
              <li className="font-bold px-3 text-sm uppercase mb-3 text-gray-400">
                Menu
              </li>
              <li>
                <div className="px-3">
                  <span>❏</span>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleRouteSidebar("/dashboard")}
                  >
                    Dashboard
                  </div>
                </div>
              </li>

              <li>
                <div className="px-3">
                  <span>❏</span>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleRouteSidebar("/dashboard/catalog")}
                  >
                    Catalog
                  </div>
                </div>
              </li>

              <li>
                <div className="px-3  ">
                  <span>❏</span> Categories
                </div>
              </li>

              <li>
                <div className="px-3  ">
                  <span className="text-lg">❏</span> Ecommerce
                </div>
              </li>

              <li>
                <div className="px-3  ">
                  <span className="text-lg">❏</span> Etalase
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Drawer;
