import React from "react";

const SunMoon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 20L7.40192 14.75H12.5981L10 20Z" fill="black" />
      <path d="M10 0L12.5981 5.25H7.40192L10 0Z" fill="black" />
      <path d="M3 17L4.72584 12L8 15.2742L3 17Z" fill="black" />
      <path d="M17 17L12 15.2742L15.2742 12L17 17Z" fill="black" />
      <path d="M17 3L15.2742 8L12 4.72584L17 3Z" fill="black" />
      <path d="M3 3L8 4.72584L4.72584 8L3 3Z" fill="black" />
      <path d="M0 10L5.25 7.40192L5.25 12.5981L0 10Z" fill="black" />
      <path d="M20 10L14.75 12.5981L14.75 7.40192L20 10Z" fill="black" />
      <circle cx="10" cy="10" r="6" fill="white" />
      <circle cx="10" cy="10" r="6" stroke="white" />
      <circle cx="10" cy="10" r="5" fill="currentColor" />
    </svg>
  );
};

export default SunMoon;
