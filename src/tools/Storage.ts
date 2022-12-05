import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//USER_DATA is example
export enum StorageKey {
  USER_DATA = 'user_data',
}

/**
 *
 * @param key 키는 strageKey 참고
 * @param data 저장할 데이터
 */
export const SaveData = async (key: StorageKey, data: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @param key 키는 strageKey 참고
 * @returns data 반환
 */
export const GetData = async (key: StorageKey) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @param key 키는 strageKey 참고
 * 스토리지 데이터 삭제
 */
export const DeleteData = async (key: StorageKey) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};
