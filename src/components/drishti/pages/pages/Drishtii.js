import React from "react";
import Loadable from "react-loadable";
import "../../styles/home.scss";

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("./Container"), 
  loading: loader,
});

const Drishtii = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Drishtii;
