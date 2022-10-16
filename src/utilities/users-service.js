import * as usersAPI from './users-api';

export async function signUp(userData) {
  try {
    // Delegate the network request code to the users-api.js
    // service module which will ultimately return a JWT
    const token = await usersAPI.signUp(userData);
    // Persist the "token"
    localStorage.setItem('token', token);
    return getUser();
  } catch {
    throw new Error('Invalid Sign Up');
  }
}

export async function login(credentials) {
  try {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
  } catch {
    throw new Error('Bad Credentials');
  }
}

export function logOut() {
  localStorage.removeItem('token');
}

export function checkToken() {
  return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Check if expired, remove if it is
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}



// import * as usersAPI from './users-api';

// export async function signUp(userData) {
//   // Delete the network request code to the 
//   // users-api.js module which will ultimately
//   // return the JWT
//   const token = await usersAPI.signUp(userData);
//   // Persist the token to localStorage
//   localStorage.setItem('token', token);
//   return getUser();
// }

// export async function login(credentials) {
//   const token = await usersAPI.login(credentials);
//   // Persist the token to localStorage
//   localStorage.setItem('token', token);
//   return getUser();
// }

// export function getToken() {
//   const token = localStorage.getItem('token');
//   // getItem will return null if no key
//   if (!token) return null;
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   // A JWT's expiration is expressed in seconds, not miliseconds
//   if (payload.exp < Date.now() / 1000) {
//     // Token has expired
//     localStorage.removeItem('token');
//     return null;
//   }
//   return token;
// }

// export function getUser() {
//   const token = getToken();
//   return token ? JSON.parse(atob(token.split('.')[1])).user : null;
// }

// export function logOut() {
//   localStorage.removeItem('token');
// }