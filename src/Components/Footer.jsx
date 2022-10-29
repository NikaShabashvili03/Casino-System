import React, { useState } from "react";
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="Footer">
            <button disabled={props.isDisabled} id="button" className="button" onClick={props.spin}>-1$ Spin</button>
        </div>
    );
};

export default Footer;