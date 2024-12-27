import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";


export default function MainLayout() {
  return (
    <div >
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
