import Navbar from "../components/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-24">{children}</main>
    </>
  );
};

export default Layout;
