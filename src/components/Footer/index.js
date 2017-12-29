import React from "react";

import logo from "./assets/logo.svg";
import "./index.css";

const APP_VERSION_LABEL = `v${process.env.REACT_APP_VERSION}`;
const COINBASE_API_URL = "https://developers.coinbase.com/api/v2";
const GITHUB_REPOSITORY_URL = `https://github.com/tohjustin/coincharts/releases/tag/${process.env.REACT_APP_VERSION}`;

const Footer = () => (
  <div className="Footer">
    <div>
      <span>Powered by </span>
      <a href={COINBASE_API_URL} target="_blank" rel="noopener noreferrer">
        <img src={logo} className="logo" alt="coinbase" />
      </a>
    </div>
    <div>
      <a href={GITHUB_REPOSITORY_URL} target="_blank" rel="noopener noreferrer">
        {APP_VERSION_LABEL}
      </a>
    </div>
  </div>
);

export default Footer;
