export function authHeader() {
  const userStr = localStorage.getItem('user');
  let user = null;
  if (userStr) user = JSON.parse(userStr);
  if (user && user.tokens && user.tokens.accessToken) {
    return { Authorization: `Bearer ${user.tokens.accessToken}` };
  }
  return { Authorization: '' };
}

export function refreshHeader() {
  const userStr = localStorage.getItem('user');
  let user = null;
  if (userStr) user = JSON.parse(userStr);
  if (user && user.tokens && user.tokens.refreshToken) {
    return { Authorization: `Bearer ${user.tokens.refreshToken}` };
  }
  return { Authorization: '' };
}
