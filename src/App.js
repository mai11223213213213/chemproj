import React, { useState } from 'react';
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

const App = () => {
  const [sections, setSections] = useState([null, null, null]);

  // Масив доступних опцій (фільтрується при перетягуванні)
  const [availableOptions, setAvailableOptions] = useState([
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
  ]);
  console.log(availableOptions)
  console.log(sections)

  const [draggedItem, setDraggedItem] = useState(null);

  // Початок перетягування
  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  // Відпускання елемента у секції
  const handleDrop = (index) => {
    if (sections[index] === null) {
      const updatedSections = [...sections];
      updatedSections[index] = draggedItem;
      setSections(updatedSections);

      // Видаляємо з опцій перетягнутий елемент
      setAvailableOptions(availableOptions.filter((option) => option.id !== draggedItem.id));

      setDraggedItem(null);
    }
  };

  // Повернення елемента назад в опції
  const handleReturn = (index) => {
    const updatedSections = [...sections];
    const returnedItem = updatedSections[index];
    updatedSections[index] = null;
    setSections(updatedSections);

    // Додаємо елемент назад у список доступних
    setAvailableOptions([...availableOptions, returnedItem]);
  };

  return (
    <div className="App">
      {/* Секції для перетягування */}
      <Section sections={sections} onDrop={handleDrop} onReturn={handleReturn} />

      {/* Опції для перетягування */}
      <Option onDragStart={handleDragStart} options={availableOptions} />
    </div>
  );
};

export default App;
