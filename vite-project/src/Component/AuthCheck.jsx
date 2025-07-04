
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkToken } from '../Redux/userSlice';

const AuthCheck = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <div>
      {children}
    </div>
  );
};

export default AuthCheck;