import React from "react";

export function DeleteBtn(props) {
  return (
    <span className="btn" {...props} role="button" tabIndex="0">
    </span>
  );
}

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