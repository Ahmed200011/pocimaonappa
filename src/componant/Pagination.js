import React from "react";
import "./Pagination .css";

const Pagination = ({ toNextpage, toPrevpage }) => {
  return (
    <div className="btn">
      {toPrevpage && (
        <button onClick={toPrevpage} className={"button-30"}>
          Previous
        </button>
      )}
      {toNextpage && (
        <button onClick={toNextpage} className={"button-30"}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
