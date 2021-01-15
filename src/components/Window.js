import React from "react";

export default function Window() {
  return (
    <div className="window-top">
      {/* <img src="window-elements2.svg" className="window-elements" alt="Window buttons"></img> */}
      <svg width="76" height="30" viewBox="0 0 76 30">
        <defs>
          <clipPath id="clip-window_elements">
            <rect width="76" height="30" />
          </clipPath>
        </defs>
        <g id="window_elements" clipPath="url(#clip-window_elements)">
          <g id="Group_225" data-name="Group 225" transform="translate(-34.046 -20.653)">
            <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(36.046 22.653)" fill="none" stroke="#1e00ff" strokeWidth="4">
              <circle cx="13" cy="13" r="13" stroke="none" />
              <circle cx="13" cy="13" r="11" fill="none" />
            </g>
            <g id="Group_224" data-name="Group 224" transform="translate(81.865 26.02)">
              <line id="Line_65" data-name="Line 65" y1="21.665" x2="21.665" transform="translate(0)" fill="none" stroke="#1e00ff" strokeWidth="4" />
              <line id="Line_66" data-name="Line 66" x2="21.665" y2="21.665" transform="translate(0)" fill="none" stroke="#1e00ff" strokeWidth="4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
