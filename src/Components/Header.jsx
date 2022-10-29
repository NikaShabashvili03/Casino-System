import React, { useState } from "react";
import AddAmount from "./AddAmount/AddAmount";
import Amount from "./Amount/Amount";
import CasinoName from "./CasinoName/CasinoName";
import './Header.css';

const Header = (props) => {
    return (
        <div className="Header">
            <Amount money={props.money}/>
            <CasinoName name={"Casino"}/>
            <AddAmount money={props.money} isDisabled2={props.isDisabled2} amountAdd={props.amountAdd}/>
        </div>
    );
};

export default Header;