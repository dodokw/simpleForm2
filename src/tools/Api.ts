import React from 'react';
import axios from 'axios';

//서버주소
const DefaultURL = 'https://';

//header
const DEFAULT_HEADER = {
  'Content-Type': 'multipart/form-data',
};

export enum Method {
  POST = 'POST',
  GET = 'GET',
}

/**
 *
 * @param {string} uri api uri
 * @param {method} POST or GET
 * @param {object} data api method에 따른 데이터
 * @readonly
 * @description api 호출
 */
export const API = async (uri: string, method: Method, data: object) => {
  //폼데이터 형식인 경우로 설정(아닌 경우에는 수정)
  const form = new FormData();
  form.append('data', JSON.stringify(data));
  const res = await axios(DefaultURL + uri, {
    method: method,
    headers: DEFAULT_HEADER,
    data: form,
  });
  return res;
};
