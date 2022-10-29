import React, { useState } from "react";
import './Body.css';


const Body = (props) => {
    return (
        <div className="Body">
            <h2 className="number">{props.number}</h2>
            <h2 className="number2">{props.number2}</h2>
            <h2 className="number3">{props.number3}</h2>
        </div>
    );
};

export default Body;