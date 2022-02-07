import React, { MouseEvent, useState } from 'react';
import { TypeForm } from '../utils/enum/enum';
import { HandlerSelectForm } from '../utils/types/types';
import { useFormik } from 'formik';
import { ValuesRegistration } from '../utils/interfaces/interfaces';
import Button from './Button';
import { validateRegistration } from '../utils/functions/validate';

const Registration: React.FC<{ onSelectForm: HandlerSelectForm }> = (props) => {
  const [stateButton, setStateButton] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateRegistration,
    onSubmit: (values: ValuesRegistration) => {
      setStateButton(true);
      setTimeout(() => {
        setStateButton(false);
        const { email, password, passwordConfirm } = values;
        console.log(email, password, passwordConfirm);
      }, 3000);
    },
  });
  const handlerSelectRegistration = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    props.onSelectForm(TypeForm.Authorization);
  };

  return (
    <div className='form-registration-wrap'>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className='form-group'>
          <label htmlFor='email-registration'>Логин</label>
          <input
            type='email'
            name='email'
            className='form-control'
            id='email-registration'
            placeholder='Введите email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <div className='form-error'>{formik.errors.email}</div> : ''}
        </div>
        <div className='form-group'>
          <label htmlFor='password-reg1'>Пароль</label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='password-reg1'
            placeholder='Введите пароль'
            autoComplete='on'
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? <div className='form-error'>{formik.errors.password}</div> : ''}
        </div>
        <div className='form-group'>
          <label htmlFor='password-reg2'>Подтвердить пароль</label>
          <input
            type='password'
            name='passwordConfirm'
            className='form-control'
            id='password-reg2'
            placeholder='Подтвердите пароль'
            autoComplete='on'
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            onBlur={formik.handleBlur}
          />
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? <div className='form-error'>{formik.errors.passwordConfirm}</div> : ''}
        </div>
        <div className='form-buttons'>
          <Button name='Регистрация' className='btn btn-dark' type='submit' disabled={stateButton}/>
          <a href='/' onClick={handlerSelectRegistration}>
            Войти
          </a>
        </div>
      </form>
    </div>
  );
};

export default Registration;
