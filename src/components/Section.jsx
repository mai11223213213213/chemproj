import React from 'react';

const Section = ({ onDrop, onDragOver }) => {
  return (
    <div className='section'>
      {[1, 2, 3].map((id) => (
        <div
          key={id}
          className='section-box'
          onDrop={(e) => onDrop(e)}
          onDragOver={(e) => onDragOver(e)}
        ></div>
      ))}
    </div>
  );
};

export default Section;