// exec 값이 null인 경우 정규식에 부합하지 않은 값.(아래는 예시)

/** @description 아이디 형식 검사*/
const idReg = /^[A-Za-z]{1}[A-Za-z0-9]{4,14}$/;

/**@description 전화번호 형식 검사 */
const phoneReg = /^01([0|1|6|7|8|9]?)-?([0-9]{4,5})-?([0-9]{4})$/;

/**@description 비밀번호 형식 검사*/
const passwordReg = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{9,16}$/;

export {idReg, phoneReg, passwordReg};
