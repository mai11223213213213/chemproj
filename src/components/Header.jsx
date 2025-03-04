import React from 'react'

const Header = ({right, currtime}) => {
  return (
   <header className="header">
        <div className="win">
            <p>{currtime}</p>
            <p>{right >= 0 ? `Кількість правильнх варіантів: ${right}` : ""}</p>
        </div>
   </header>
  )
}

export default Header