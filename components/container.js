import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-30 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;