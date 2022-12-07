import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import BottomNavigation from '../navigation/BottomNavigation';
import LoginNavigation from '../navigation/LoginNavigation';
import {GetData, StorageKey} from '../tools/Storage';

const Route = () => {
  const user = useSelector((state: any) => state?.LoginReducer?.user);
  const [isSplash, setIsSplash] = useState(true);

  //   const [userData, setUserData] = useState(null);
  //storage 에서 유저 정보 가져옴
  //   const getUserData = () => {
  //     setIsLoad(true);
  //     GetData(StorageKey.USER_DATA)
  //       .then(data => {
  //         setUserData(data);
  //         console.log(data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setIsLoad(false);
  //       });
  //   };

  useEffect(() => {}, []);

  return <>{user?.id === '' ? <LoginNavigation /> : <BottomNavigation />}</>;
};

export default Route;
