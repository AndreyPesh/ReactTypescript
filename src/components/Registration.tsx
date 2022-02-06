import React, { MouseEvent } from 'react';
import { TypeForm } from '../utils/enum/enum';
import { HandlerSelectForm } from '../utils/types/types';

const Registration: React.FC<{ onSelectForm: HandlerSelectForm }> = (props) => {

  const handlerSelectRegistration = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    props.onSelectForm(TypeForm.Authorization);
  };

  return (
    <div className='form-registration-wrap'>
      <form>
        <div className='form-group'>
          <label htmlFor='email-registration'>Email</label>
          <input
            type='email'
            className='form-control'
            id='email-registration'
            placeholder='Введите email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password-reg1'>Пароль</label>
          <input type='password' className='form-control' id='password-reg1' placeholder='Введите пароль' />
        </div>
        <div className='form-group'>
          <label htmlFor='password-reg2'>Подтвердить пароль</label>
          <input type='password' className='form-control' id='password-reg2' placeholder='Введите пароль' />
        </div>
        <div className='form-buttons'>
          <button type='submit' className='btn btn-dark'>
            Регистрация
          </button>
          <a href='/' onClick={handlerSelectRegistration}>
            Войти
          </a>
        </div>
      </form>
    </div>
  );
};

export default Registration;