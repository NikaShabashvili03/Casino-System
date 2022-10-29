import React from "react";
import './Amount.css';

const Amount = (props) => {
    return (
        <h2 className="Amount">
            {props.money} $
        </h2>
    );
};

export default Amount;