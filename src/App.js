import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Option from './components/Option';
import Section from './components/Section';




const App = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, id) => {
    setDraggedItem(id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log('Dropped item id:', draggedItem);
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  

  return (
    <div className="App">
      <Section onDrop={handleDrop} onDragOver={handleDragOver} />
      <Option onDragStart={handleDragStart} />
    </div>
  );
};

export default App;

