import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-brand-instagram"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <rect x={4} y={4} width={16} height={16} rx={4} />
      <circle cx={12} cy={12} r={3} />
      <path d="M16.5 7.5v.001" />
    </svg>
  );
}

export default SvgComponent;
