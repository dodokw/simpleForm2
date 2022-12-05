import React from 'react';
import axios from 'axios';

//서버주소
const DefaultURL = 'https://';

//header
const DEFAULT_HEADER = {
  'Content-Type': 'multipart/form-data',
};

/**
 *
 * @param {string} uri api uri
 * @param {object} data api method에 따른 데이터
 * @readonly
 * @description api 호출
 */
export const PostAPI = async (uri: string, data: object) => {
  const form = new FormData();
  form.append('data', JSON.stringify(data));
  const res = await axios(DefaultURL + uri, {
    method: 'POST',
    headers: DEFAULT_HEADER,
    data: form,
  });
  return res;
};