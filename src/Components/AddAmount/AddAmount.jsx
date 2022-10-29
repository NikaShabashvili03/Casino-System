import React from "react";
import './AddAmount.css';
const AddAmount = (props) => {
    if(props.money == 0){
        document.querySelector("#btneffect").style.animation = "1s effectbtn";
    }
    return(
        <button 
            id="btneffect" 
            disabled={props.isDisabled2} 
            onClick={props.amountAdd} 
            className="AddAmount"
            >
            +5 $
        </button>
    );
}

export default AddAmount