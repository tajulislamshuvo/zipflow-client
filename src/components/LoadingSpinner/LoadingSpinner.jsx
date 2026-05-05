import React from "react";
import { Bars } from "react-loader-spinner";
// import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <div
      className="
      flex 
       min-h-screen
      justify-center 
      items-center "
    >
      <Bars
        height={70}
        width={70}
        color="#4fa94d"
        visible={true}
        ariaLabel="oval-loading"
      ></Bars>
    </div>
  );
};

export default LoadingSpinner;
