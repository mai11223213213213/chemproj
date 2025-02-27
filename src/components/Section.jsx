import React from 'react';

const Section = ({ sections, onDrop, onReturn }) => {
  return (
    <div className="section">
      {sections.map((item, index) => (
        <div
          key={index}
          className="section-box"
          onDrop={() => onDrop(index)}
          onDragOver={(e) => e.preventDefault()}
        >
          {item ? (
            <img
              src={item.src}
              alt="Img"
              className="section-img"
              onClick={() => onReturn(index)}
            />
           ) : ""//(
          //   <span className="placeholder">Drop here</span>
          // )
        }
        </div>
      ))}
    </div>
  );
};

export default Section;
