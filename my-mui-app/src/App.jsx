import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import { AdminUsersPage } from './pages/AdminUsersPage';
import ProtectedRoutes from './context/ProtectedRoutes';
import { MembersPage } from './pages/MembersPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/unauthorized' element={<UnauthorizedPage />} />

          {/* Protected Routes */}
          <Route path='/register' element={
            <ProtectedRoutes roles={['guest']}>
              <RegisterPage />
            </ProtectedRoutes>
          }/>

          <Route path='/profile' element={
            <ProtectedRoutes roles={['member']}>
              <ProfilePage />
            </ProtectedRoutes>
          }/>

          <Route path='/members' element={
            <ProtectedRoutes roles={['coach', 'admin']}>
              <MembersPage />
            </ProtectedRoutes>
          }/>
          
          <Route path='/admin/users' element={
            <ProtectedRoutes roles={['admin']}>
              <AdminUsersPage />
            </ProtectedRoutes>
          }/>

          <Route path='*' element={<Navigate to='/login'/>} />
        </Routes>
    </Router>
  )
}

export default App
