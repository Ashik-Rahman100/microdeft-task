/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { LocalStorageUtil } from "../../utils/localStorage";

const ProtectedRoute = ({ children }) => {
//   const token = getTokenFromCookie('token');
  const user = LocalStorageUtil.get('user')
 
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;

