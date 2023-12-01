// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${props.backgroundColor} text-white rounded-full px-8 py-2 font-medium text-[1rem] hover:bg-blueBackground transition-all hover:shadow-[20px_5px_20px_rgba(0,0,0,0.24)]`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
