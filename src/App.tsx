import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(ref.current?.value);
      setTitle('');
    }
  };

  const addHandler = (title: string) => {
    console.log('title ', title);
    
  }

  return (
    <>
      <Navbar onAdd={addHandler}/>
      <div>
        dfgdfg
        <input value={title} ref={ref} type='text' id='title' onChange={onChangeHandler} onKeyPress={onKeyPress} />
      </div>
    </>
  );
};

// const createUser = async () => {
//   const rawResponse = await fetch('https://a-c-rslang.herokuapp.com/words', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     // body: JSON.stringify(user)
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// };
