import React from 'react';

const Option = ({ onDragStart, options }) => {
  return (
    <div className="option">
      {options.map((item) => (
        <div
          key={item.id}
          className="option-box"
          draggable="true"
          onDragStart={(e) => onDragStart(e, item)}
        >
          <img src={item.src} alt="Img" className="option-img" />
        </div>
      ))}
    </div>
  );
};

export default Option;
