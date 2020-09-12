import * as React from "react";

function ArrowsRotateIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M33 1c7.678 0 15.354 2.929 21.212 8.787C64.91 20.484 65.841 37.248 57.003 49l-6.001 6.002M31 63c-7.678 0-15.354-2.929-21.212-8.787C-.91 43.516-1.841 26.752 6.997 15l6.001-6.002"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M51 44v11h11M13 20V9H2"
      />
    </svg>
  );
}

export default ArrowsRotateIcon;