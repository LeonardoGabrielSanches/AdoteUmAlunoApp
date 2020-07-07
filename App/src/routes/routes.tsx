import React, { useContext } from 'react';
import AppContext from '../context/appContext';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes:React.FC = () => {
  const { Signed } = useContext(AppContext);

  return !Signed
    ? <AuthRoutes />
    : <AppRoutes />;
};
