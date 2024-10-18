import { jwtDecode } from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes({ userData }) {

  const token = localStorage.getItem("userToken");
  if(token){
    const decode = jwtDecode(token);
    if(decode){
      return <Outlet />;
    }
  }
  return <Navigate to="/login" replace />;

  // if (!userData || Object.keys(userData).length === 0) {
  //     return <Navigate to="/login" replace />;
  // }
  // // If user is logged in, allow access to the protected route
  // return <Outlet />;
}
