import React, { useState, useEffect, use } from 'react';
import './App.css';
import Option from './components/Option';
import Section from './components/Section';
import img1 from "./assets/img/right_1.png";
import img2 from "./assets/img/right_2.png";
import img3 from "./assets/img/right_3.png";
import img4 from "./assets/img/wrong_1.png";
import img5 from "./assets/img/wrong_2.png";
import img6 from "./assets/img/wrong_3.png";
import img7 from "./assets/img/wrong_4.png";
import img8 from "./assets/img/wrong_5.png";
import img9 from "./assets/img/wrong_6.png";
import Header from './components/Header';

const initialOptions = [{ id: 1, src: img1 },
{ id: 2, src: img2 },
{ id: 3, src: img3 },
{ id: 4, src: img4 },
{ id: 5, src: img5 },
{ id: 6, src: img6 },
{ id: 7, src: img7 },
{ id: 8, src: img8 },
{ id: 9, src: img9 },]

const App = () => {
  const [sections, setSections] = useState([null, null, null]);
  const [rightcount, setRightcount] = useState(-1);
  const [options, setOptions] = useState(initialOptions);
  const [selectedItem, setSelectedItem] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (sections.every((item) => item !== null)) {
      const correctCount = sections.reduce((count, item, i) => item?.id === i + 1 ? count + 1 : count, 0);
      setRightcount(correctCount);
      console.log(correctCount);
    }
  }, [sections]);
  useEffect(()=>{
    const interval = setInterval(()=>{setTime((prev)=>prev+1)}, 1000)
    return()=>clearInterval(interval)

  }, []);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleDrop = (index) => {
    if (!selectedItem) return;

    const newSections = [...sections];

    // Якщо в секції є елемент, повертаємо його в опції
    if (newSections[index]) {
      setOptions((prev) => [...prev, newSections[index]]);
    }

    // Розміщуємо вибраний елемент у секції
    newSections[index] = selectedItem;
    setSections(newSections);

    // Видаляємо вибраний елемент з опцій
    setOptions((prev) => prev.filter((opt) => opt.id !== selectedItem.id));

    // Скидаємо вибраний елемент
    setSelectedItem(null);
  };

  const handleReturn = (index) => {
    const newSections = [...sections];
    const returnedItem = newSections[index];
    if (returnedItem) {
      setOptions((prev) => [...prev, returnedItem]);
      newSections[index] = null;
      setSections(newSections);
    }
  };

  return (
    <div className="App">
      <Header right={rightcount} currtime={time}/>
      <Section sections={sections} onDrop={handleDrop} onReturn={handleReturn} />
      <Option options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App;

