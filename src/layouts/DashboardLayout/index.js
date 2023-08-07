import Image from 'next/image';
import PropTypes from 'prop-types';


const DashboardLayout = ({ children }) => {
    return (
      <div>
        <div className="absolute w-full bg-blue-500 dark:hidden min-h-75" />
        {/* sidenav  */}
        <div
          id="aside"
          className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
          aria-expanded="false"
        >
          <div className="h-19">
            <i
              className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
              id="sidenav-close"
            />
            <a
              className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
              href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html"
              target="_blank"
            >
              <Image
                src="/images/img/logo-ct-dark.png"
                width={20}
                height={20}
                className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
                alt="main_logo"
              />
              <Image
                src="/images/img/logo-ct.png"
                width={20}
                height={20}
                className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
                alt="main_logo"
              />
              <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
                Argon Dashboard 2
              </span>
            </a>
          </div>
          <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
            <ul className="flex flex-col pl-0 mb-0">
              <li className="mt-0.5 w-full">
                <a
                  className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                  href="./pages/dashboard.html"
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2" />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="mt-0.5 w-full">
                <a
                  className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                  href="./pages/tables.html"
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    Tables
                  </span>
                </a>
              </li>
              <li className="mt-0.5 w-full">
                <a
                  className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                  href="./pages/billing.html"
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                    <i className="relative top-0 text-sm leading-normal text-emerald-500 ni ni-credit-card" />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    Billing
                  </span>
                </a>
              </li>
              <li className="mt-0.5 w-full">
                <a
                  className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                  href="./pages/virtual-reality.html"
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i className="relative top-0 text-sm leading-normal text-cyan-500 ni ni-app" />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    Virtual Reality
                  </span>
                </a>
              </li>
              <li className="mt-0.5 w-full">
                <a
                  className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                  href="./pages/rtl.html"
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i className="relative top-0 text-sm leading-normal text-red-600 ni ni-world-2" />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    RTL
                  </span>
                </a>
              </li>
              <li className="w-full mt-4">
                <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
                  Account pages
                </h6>
              </li>
              <li className="mt-0.5 w-full">
                <a
                  className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                  href="./pages/profile.html"
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i className="relative top-0 text-sm leading-normal text-slate-700 ni ni-single-02" />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    Profile
                  </span>
                </a>
              </li>
              <li className="mt-0.5 w-full">
                <a
                  className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                  href="./pages/sign-in.html"
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04" />
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                    Sign In
                  </span>
                </a>
              </li>
              {[1, 3, 4, 1, 1, 1, 1].map((key, asdf) => {
                return (
                  <li key={asdf} className="mt-0.5 w-full">
                    <a
                      className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                      href="./pages/sign-up.html"
                    >
                      <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                        <i className="relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection" />
                      </div>
                      <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                        Sign Up
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* end sidenav */}
        <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
          {/* Navbar */}
          <nav
            className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
            id="navbar-main"
            navbar-scroll="false"
          >
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
              <nav>
                {/* breadcrumb */}
                <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                  <li className="text-sm leading-normal">
                    <a className="text-white opacity-50">Pages</a>
                  </li>
                  <li
                    className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
                    aria-current="page"
                  >
                    Dashboard
                  </li>
                </ol>
                <h6 className="mb-0 font-bold text-white capitalize">
                  Dashboard
                </h6>
              </nav>
              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                <div className="flex items-center md:ml-auto md:pr-4">
                  <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                    <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                      <i className="fas fa-search" />
                    </span>
                    <input
                      type="text"
                      className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                      placeholder="Type here..."
                    />
                  </div>
                </div>
                <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                  {/* online builder btn  */}
                  {/* <li class="flex items-center">
                  <a class="inline-block px-8 py-2 mb-0 mr-4 text-xs font-bold text-center text-blue-500 uppercase align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer leading-pro hover:-translate-y-px active:shadow-xs hover:border-blue-500 active:bg-blue-500 active:hover:text-blue-500 hover:text-blue-500 tracking-tight-rem hover:bg-transparent hover:opacity-75 hover:shadow-none active:text-white active:hover:bg-transparent" target="_blank" href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053">Online Builder</a>
                </li> */}
                  <li className="flex items-center">
                    <a
                      href="./pages/sign-in.html"
                      className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand"
                    >
                      <i className="fa fa-user sm:mr-1" />
                      <span className="hidden sm:inline">Sign In</span>
                    </a>
                  </li>
                  <li className="flex items-center pl-4 xl:hidden">
                    <a
                      className="block p-0 text-sm text-white transition-all ease-nav-brand"
                      id="sidenav-trigger"
                    >
                      <div className="w-4.5 overflow-hidden">
                        <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all" />
                        <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all" />
                        <i className="ease relative block h-0.5 rounded-sm bg-white transition-all" />
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center px-4">
                    <a className="p-0 text-sm text-white transition-all ease-nav-brand">
                      <i
                        id="fixed-plugin-button-nav"
                        className="cursor-pointer fa fa-cog"
                      />
                      {/* fixed-plugin-button-nav  */}
                    </a>
                  </li>
                  {/* notifications */}
                  <li className="relative flex items-center pr-2">
                    <p className="hidden transform-dropdown-show" />
                    <a
                      className="block p-0 text-sm text-white transition-all ease-nav-brand"
                      id="dropdown-trigger"
                      aria-expanded="false"
                    >
                      <i className="cursor-pointer fa fa-bell" />
                    </a>
                    <ul
                      id="dropdown-menu"
                      className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease lg:shadow-3xl duration-250 min-w-44 before:sm:right-8 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent dark:shadow-dark-xl dark:bg-slate-850 bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer"
                    >
                      {/* add show class on dropdown open js */}
                      <li className="relative mb-2">
                        <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors">
                          <div className="flex py-1">
                            <div className="my-auto"></div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white">
                                <span className="font-semibold">New message</span>{" "}
                                from Laur
                              </h6>
                              <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                                <i className="mr-1 fa fa-clock" />
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="relative mb-2">
                        <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700">
                          <div className="flex py-1">
                            <div className="my-auto"></div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white">
                                <span className="font-semibold">New album</span>{" "}
                                by Travis Scott
                              </h6>
                              <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                                <i className="mr-1 fa fa-clock" />1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="relative">
                        <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700">
                          <div className="flex py-1">
                            <div className="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                              <svg
                                width="12px"
                                height="12px"
                                viewBox="0 0 43 36"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>credit-card</title>
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    transform="translate(-2169.000000, -745.000000)"
                                    fill="#FFFFFF"
                                    fillRule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(453.000000, 454.000000)">
                                        <path
                                          className="color-background"
                                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                          opacity="0.593633743"
                                        />
                                        <path
                                          className="color-background"
                                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white">
                                Payment successfully completed
                              </h6>
                              <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                                <i className="mr-1 fa fa-clock" />2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* end Navbar */}
          {/* cards */}
          <div className="w-full px-6 py-6 mx-auto">
            {/* konten */}
            {children}
          </div>
          {/* end cards */}
        </main>
        <div id="fixed-plugin">
          <a
            id="fixed-plugin-button"
            className="fixed px-4 py-2 text-xl bg-white shadow-lg cursor-pointer bottom-8 right-8 z-990 rounded-circle text-slate-700"
          >
            <i className="py-2 pointer-events-none fa fa-cog"> </i>
          </a>
          {/* -right-90 in loc de 0*/}
          <div
            id="fixed-plugin-card"
            className="z-sticky backdrop-blur-2xl backdrop-saturate-200 dark:bg-slate-850/80 shadow-3xl w-90 ease -right-90 fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white/80 bg-clip-border px-2.5 duration-200"
          >
            <div className="px-6 pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
              <div className="float-left">
                <h5 className="mt-4 mb-0 dark:text-white">Argon Configurator</h5>
                <p className="dark:text-white dark:opacity-80">
                  See our dashboard options.
                </p>
              </div>
              <div className="float-right mt-6">
                <button
                  id="fixed-plugin-close-button"
                  className="inline-block p-0 mb-4 text-sm font-bold leading-normal text-center uppercase align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:-translate-y-px tracking-tight-rem bg-150 bg-x-25 active:opacity-85 dark:text-white text-slate-700"
                >
                  <i className="fa fa-close" />
                </button>
              </div>
              {/* End Toggle Button */}
            </div>
            <hr className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            <div className="flex-auto p-6 pt-0 overflow-auto sm:pt-4">
              {/* Sidebar Backgrounds */}
              <div>
                <h6 className="mb-0 dark:text-white">Sidebar Colors</h6>
              </div>
  
              {/* Sidenav Type */}
              <div className="mt-4">
                <h6 className="mb-0 dark:text-white">Sidenav Type</h6>
                <p className="text-sm leading-normal dark:text-white dark:opacity-80">
                  Choose between 2 different sidenav types.
                </p>
              </div>
              <div className="flex">
                <button
                  id="transparent-style-btn"
                  className="inline-block w-full px-4 py-2.5 mb-2 font-bold leading-normal text-center text-white capitalize align-middle transition-all bg-blue-500 border border-transparent border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-blue-500 to-violet-500 hover:border-blue-500"
                  data-class="bg-transparent"

                >
                  White
                </button>
                <button
                  id="white-style-btn"
                  className="inline-block w-full px-4 py-2.5 mb-2 ml-2 font-bold leading-normal text-center text-blue-500 capitalize align-middle transition-all bg-transparent border border-blue-500 border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-none hover:border-blue-500"
                  data-class="bg-white"
                >
                  Dark
                </button>
              </div>
              <p className="block mt-2 text-sm leading-normal dark:text-white dark:opacity-80 xl:hidden">
                You can change the sidenav type just on desktop view.
              </p>
              {/* Navbar Fixed */}
              <div className="flex my-4">
                <h6 className="mb-0 dark:text-white">Navbar Fixed</h6>
                <div className="block pl-0 ml-auto min-h-6">
                  <input
                    id="navbarfixed"
                    className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                    type="checkbox"
                  />
                </div>
              </div>
              <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              <div className="flex mt-2 mb-12">
                <h6 className="mb-0 dark:text-white">Light / Dark</h6>
                <div className="block pl-0 ml-auto min-h-6">
                  <input
                    id="dark-toggle"
                    className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                    type="checkbox"
                  />
                </div>
              </div>
              <a
                target="_blank"
                className="dark:border dark:border-solid dark:border-white inline-block w-full px-6 py-2.5 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-transparent border border-solid border-transparent rounded-lg cursor-pointer text-sm ease-in hover:shadow-xs hover:-translate-y-px active:opacity-85 tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850"
                href="https://www.creative-tim.com/product/argon-dashboard-tailwind"
              >
                Free Download
              </a>
              <a
                target="_blank"
                className="dark:border dark:border-solid dark:border-white dark:text-white inline-block w-full px-6 py-2.5 mb-4 font-bold leading-normal text-center align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:shadow-xs hover:-translate-y-px active:opacity-85 text-sm ease-in tracking-tight-rem bg-150 bg-x-25 border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none"
                href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/"
              >
                View documentation
              </a>
              <div className="w-full text-center">
                <a
                  className="github-button"
                  href="https://github.com/creativetimofficial/argon-dashboard-tailwind"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star creativetimofficial/argon-dashboard on GitHub"
                >
                  Star
                </a>
                <h6 className="mt-4 dark:text-white">Thank you for sharing!</h6>
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23tailwindcss&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fargon-dashboard-tailwind"
                  className="inline-block px-5 py-2.5 mb-0 mr-2 font-bold text-center text-white align-middle transition-all border-0  rounded-lg cursor-pointer hover:shadow-xs hover:-translate-y-px active:opacity-85 leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
                  target="_blank"
                >
                  {" "}
                  <i className="mr-1 fab fa-twitter" /> Tweet{" "}
                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard-tailwind"
                  className="inline-block px-5 py-2.5 mb-0 mr-2 font-bold text-center text-white align-middle transition-all border-0  rounded-lg cursor-pointer hover:shadow-xs hover:-translate-y-px active:opacity-85 leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
                  target="_blank"
                >
                  <i className="mr-1 fab fa-facebook-square" /> Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  DashboardLayout.propTypes = {
    children: PropTypes.node
  };
  
  export default DashboardLayout;
  