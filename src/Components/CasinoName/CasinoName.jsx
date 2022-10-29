import React from "react";
import './CasinoName.css';

const CasinoName = (props) => {
    return (
        <h2 className="CasinoName">
            {props.name}
        </h2>
    );
};

export default CasinoName;