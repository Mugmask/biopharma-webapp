import { Outlet, ScrollRestoration } from "react-router-dom";
import AppProvider from "./AppProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AppProvider>
      <ScrollRestoration />
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div className="flex-1 bg-slate-50 py-5 mt-14">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

