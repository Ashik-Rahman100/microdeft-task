import Cookies from 'js-cookie';

// Function to set the token in a cookie
export const setTokenInCookie = (token) => {
  Cookies.set('token', token);
};

// // Example usage after login
// const token = "your-authorization-token";
// setTokenInCookie(token);

export  const getTokenFromCookie = () => {
    return Cookies.get('token');
  };
  
//   console.log(getTokenFromCookie());
  