import { Outlet } from "react-router-dom";
import Header from "../../../layouts/Client/Header";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClientLayout;
