import React, { FC } from 'react';
import {Maintanence} from "./Home/Home.Styles";
import Menu from "../components/Menu/Menu";

const Unknown: FC = () => {
  return (
    <>
      <Maintanence>
        <span>Page under construction</span>
      </Maintanence>
      <Menu />
    </>
  );
};

export default Unknown;
