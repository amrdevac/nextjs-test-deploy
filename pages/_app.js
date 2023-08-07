import "../styles/globals.css";
import "../styles/assets/css/argon-dashboard-tailwind.css";
import "../styles/assets/css/nucleo-icons.css";
import "../styles/assets/css/perfect-scrollbar.css";
import "../styles/assets/css/nucleo-svg.css";
import('../styles/assets/js/argon-dashboard-tailwind.js')['async'];
import('../styles/assets/js/sidenav-burger')['async'];
import('../styles/assets/js/perfect-scrollbar.js')['async'];
// import 'https://kit.fontawesome.com/42d5adcbca.js';
// import 'https://cdn.example.com/your-library.min.js';






import { store } from "../src/store";

import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
     
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </>
  );
}

export default MyApp;
