import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
        <div className="spinner-container">
            <ClipLoader color="#3498db"  size={50} />
        </div>
    );
};

export default Spinner;
