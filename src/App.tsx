import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { listRoutes } from './routes/routes';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { log } from 'console';

export const App: React.FC = () => {
  const { userStatus: {name, isAuth} } = useSelector((state: RootState) => state);
  // console.log(name, isAuth);
  
  const listPages = listRoutes.map((routeData) => {
    // console.log('user sign in');
    return <Route key={routeData.route} path={routeData.route} element={routeData.component} />;
  });
  return (
    <>
      <Header />
      <div className='main-container'>
        <Routes>{listPages}</Routes>
      </div>
      <Footer />
    </>
  );
};
