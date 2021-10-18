import { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className="py-3">{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
