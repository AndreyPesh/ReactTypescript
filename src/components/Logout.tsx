import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStatusUser } from '../redux/actions/usersCreator';
import { DEFAULT_STATUS_USER } from '../redux/constants';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerLogout = () => {
    dispatch(setStatusUser(DEFAULT_STATUS_USER));
    navigate('/');
  };

  return <button onClick={handlerLogout}>Выйти</button>;
};

export default Logout;
