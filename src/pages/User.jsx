import React, { useEffect } from 'react';
import { size } from 'lodash';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Profile from './../components/Profile/Profile';

const User = () => {
  const { username } = useParams();
  return (
    <>
      <Profile username={username}/>
    </>
  );
};

export default User;
