import React from 'react';
import {BannerContainer} from "./Banner.Styles";
import {Button} from "../../elements";
import {Link} from "react-router-dom";

type Props = {
};

const Banner: React.FC<Props> = () => {

   return (
    <BannerContainer>
      <Button
        as={Link}
        className="banner-link"
        to="https://sunpump.meme/token/TP7r1pDoS1snMjEJE1kE17GRt3Df4mYuZz"
        target="_blank"
      >
        <div className="banner-left">
          <span className="banner-text">👉 Trade VIKITA MEME Token 👈</span>
        </div>
        <div className="banner-right">
          {/*<span className="banner-text">VIKITA-TRX</span>*/}
        </div>
      </Button>
    </BannerContainer>
   );
};

export default Banner;
