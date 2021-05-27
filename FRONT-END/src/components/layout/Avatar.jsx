import React from "react";

const Avatar = ({ img, size, alt }) => {
  return (
    <div>
      <img
        className={`avatar-${size} avatar mx-2 animated zoomIn faster`}
        src={img || "/images/profile_placeholder.png"}
        alt={alt || "Avatar Image"}
      />
    </div>
  );
};

export default Avatar;
