import React from "react";

export function SaveBtn(props) {
    return (
      <button
        {...props}
        style={{ float: "right", marginBottom: 10 }}
        className="btn"
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }