import React, { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { GlobalContext } from "../../context/GlobalContext";

const Loader = () => {
  const { loading } = useContext(GlobalContext);
  return (
    <>
      {loading ?
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="1.75"
        width="70"
        visible={true}
      />
        : null}
      
    </>
  );
};

export default Loader;
