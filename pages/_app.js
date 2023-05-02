import "@/styles/globals.css";

// Internal Import

import { TrackingProvider } from "../Context/Tracking";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Nav from "@/Components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <TrackingProvider>
        <NavBar />
        <div style={{ display: "flex" }}>
          <Nav />
          <Component {...pageProps}  />
        </div>
      </TrackingProvider>
      <Footer />
    </div>
  );
}
