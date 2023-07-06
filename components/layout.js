import TopBar from "./layout-components/TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <TopBar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
