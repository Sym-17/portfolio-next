import React from "react";

type props = {
  color: string;
};

const MouseIcon = ({ color }: props) => {
  return (
    <div>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V11"
          stroke={color}
          stroke-width="1"
          stroke-linecap="round"
        />
        <path
          d="M12 5V8"
          stroke={color}
          stroke-width="1"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default MouseIcon;
