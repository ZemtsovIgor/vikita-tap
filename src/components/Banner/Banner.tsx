import React from 'react';
import {BannerContainer} from "./Banner.Styles";

type Props = {
};

const Banner: React.FC<Props> = () => {

   return (
    <BannerContainer>
      <a className="banner-link" href="https://sunpump.meme/token/TP7r1pDoS1snMjEJE1kE17GRt3Df4mYuZz" target="_blank" rel="noreferrer">
        <div className="banner-left">
          <span className="banner-text">👉 Trade VIKITA MEME Token 👈</span>
        </div>
        <div className="banner-right">
          {/*<span className="banner-text">VIKITA-TRX</span>*/}
        </div>
      </a>
    </BannerContainer>
   );
};

export default Banner;
