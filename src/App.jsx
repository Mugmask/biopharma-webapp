import { Outlet } from "react-router-dom";
import AppProvider from "./AppProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div className="flex-1 bg-green-50 py-5 mt-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

