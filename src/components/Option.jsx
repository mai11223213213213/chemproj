import React, { useState } from 'react';

const Option = ({ options, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
    onSelect(item);
  };

  return (
    <div className='option'>
      {options.map((item) => (
        <div
          key={item.id}
          className={`option-box ${selected?.id === item.id ? 'selected' : ''}`}
          style={{ touchAction: 'none' }}
          onClick={() => handleSelect(item)}
        >
          <img src={item.src} alt='molecule-part' className='option-img' />
        </div>
      ))}
    </div>
  );
};

export default Option;