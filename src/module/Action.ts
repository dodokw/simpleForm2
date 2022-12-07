export const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export function login(user: any) {
  return {
    type: types.LOGIN,
    payload: user,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
