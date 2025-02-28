import React from 'react';

const Section = ({ sections, onDrop, onReturn }) => {

  return (
    <div className='section'>
      {sections.map((item, index) => (
        <div
          key={index}
          className='section-box'
          onClick={() => onDrop(index)}
          onDragOver={(e) => e.preventDefault()}
        >
          {item && (
            <img
              src={item.src}
              alt='molecule-part'
              className='section-img'
              onClick={(e) => {
                e.stopPropagation();
                onReturn(index);
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Section;