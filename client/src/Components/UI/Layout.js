import { Fragment } from "react";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>
        <div className="container">{props.children}</div>
      </main>
    </Fragment>
  );
}

export default Layout;
