import React from "react";
import "./brand.css";
import { Google, slack, atlassian, dropbox, shopify } from "./import";

const Brand = () => {
  return (
    <div className="gpt4__brand section__padding">
      <div>
        <img src={Google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      \
    </div>
  );
};

export default Brand;
