import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="spin">
            <div class="lds-hourglass"></div>
            <div>
                <p>Loading...</p>
            </div>
        </div>
    )
}

export default Spinner;