import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import '../Style/main.sass';

const GlobalLayout = () => {
  return (
    <div className="globalLayout-container"> 
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default GlobalLayout;