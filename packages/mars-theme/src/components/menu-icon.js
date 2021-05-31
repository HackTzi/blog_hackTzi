import React from "react";

export const HamburgerIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 20 17">
      <g id="menu" transform="translate(0 1)">
        <g id="burguer" transform="translate(-24.5 -29.5)">
          <line id="Line_1" data-name="Line 1" x2="20" transform="translate(24.5 29.5)" fill="none" stroke="#7688aa" stroke-width="2"/>
          <line id="Line_2" data-name="Line 2" x2="20" transform="translate(24.5 37)" fill="none" stroke="#7688aa" stroke-width="2"/>
          <line id="Line_3" data-name="Line 3" x2="20" transform="translate(24.5 44.5)" fill="none" stroke="#7688aa" stroke-width="2" stroke-dasharray="4 4"/>
        </g>
      </g>
    </svg>
  );
};

export const CloseIcon = ({ size, color }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    viewBox="0 0 15.557 15.556"
    >
      <path id="Union_3" data-name="Union 3" d="M7.778,9.192,1.414,15.557,0,14.142,6.364,7.778,0,1.414,1.414,0,7.778,6.364,14.142,0l1.415,1.414L9.192,7.778l6.364,6.364-1.415,1.415Z" fill="#516384"/>
    </svg>
  );
};
