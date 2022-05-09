import React from "react";
import "./style.css";

interface AvatarProps {
  imgSource: string;
  alt?: string;
  width?: string;
  height?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgSource, alt, width, height }) => {
  return (
    <div className="avatar" style={{ width: width, height: height }}>
      <img src={imgSource} alt={alt ?? imgSource} />
    </div>
  );
};

export default Avatar;
