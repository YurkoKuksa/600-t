import React from "react";
import { LoaderBox } from "./Loader.styled";
import { SpinnerCircularFixed } from "spinners-react";

export const Loader = () => {
  return (
    <LoaderBox>
      <SpinnerCircularFixed
        size={55}
        thickness={180}
        speed={101}
        color="rgba(10, 33, 97, 1)"
        secondaryColor="rgba(128, 128, 128, 1)"
      />
      ;
    </LoaderBox>
  );
};

export default Loader;
