import React from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Login } from './Login';
import { Logged } from './Logged';

export const Admin: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return <Logged />
  } else {
    return <Login/> 
  };
}