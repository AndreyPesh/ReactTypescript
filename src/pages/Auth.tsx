import React, { useState } from 'react';

const Auth: React.FC = () => {
  const [mode, setMode] = useState('form1');

  const handlerSelectForm = (formName: string) => {
    setMode(formName);
  }

  const activeForm = mode === 'form1' ? <h2>form1</h2> : <h2>form2</h2>;
  const firstButtonClass = mode === 'form1' ? 'btn btn-primary' : 'btn btn-secondary';
  const secondButtonClass = mode === 'form2' ? 'btn btn-primary' : 'btn btn-secondary';
  return (
    <>
      <div>
        <button className={firstButtonClass} onClick={handlerSelectForm.bind(null, 'form1')}>Войти</button>
        <button className={secondButtonClass} onClick={handlerSelectForm.bind(null, 'form2')}>Зарегистрироваться</button>
      </div>
      <div>
        {activeForm}
      </div>
    </>
  );
};

export default Auth;
