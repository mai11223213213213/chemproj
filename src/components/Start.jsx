import React from 'react'

const Start = ({start}) => {
  return (
    <div className='start'>
        <p className="start-txt">Зараз вам буде потрібно скласти формулу метафетаміну як Волтер Вайт. Для цьго потрібно спочатку натиснути на частинку сполуки, а потім у відповідне міcце, де ви хочете її ромістити. Щоб забрати частину сполуки натисність повторно на місце, звідки хочете забрати частинку сполуки. Успіхів!</p>
        <button className='start-btn' onClick={start}>Почати!</button>
    </div>
  )
}

export default Start