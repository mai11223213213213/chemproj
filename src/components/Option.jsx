import React from 'react';
import img1 from "../assets/img/right_1.png";
import img2 from "../assets/img/right_2.png";
import img3 from "../assets/img/right_3.png";
import img4 from "../assets/img/wrong_1.png";
import img5 from "../assets/img/wrong_2.png";
import img6 from "../assets/img/wrong_3.png";
import img7 from "../assets/img/wrong_4.png";
import img8 from "../assets/img/wrong_5.png";
import img9 from "../assets/img/wrong_6.png";
const src = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
];

const Option = ({ onDragStart }) => {
  return (
    <div className='option'>
      {src.map((item) => (
        <div
          key={item.id}
          className='option-box'
          draggable='true'
          onDragStart={(e) => onDragStart(e, item.id)}
        >
          <img src={item.src} alt='Img' className='option-img' />
        </div>
      ))}
    </div>
  );
};

export default Option;