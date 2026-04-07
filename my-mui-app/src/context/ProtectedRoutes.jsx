import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from './userContext'

const ProtectedRoutes = ({children, roles}) => {
  const { role, authenticated } = useContext(UserContext);

  const currentRole = authenticated ? role : 'guest';

  if (!roles.includes(currentRole)) {
    if (!authenticated) {
      return <Navigate to='/login' replace />
    }
    return <Navigate to='/unauthorized' replace />
  }

  return children;
}

export default ProtectedRoutes