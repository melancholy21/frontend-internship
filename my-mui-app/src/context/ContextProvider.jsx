import React, { useState } from 'react';
import { UserContext } from './userContext';

const ContextProvider = ({children}) => {
    const [role, setRole] = useState(() => localStorage.getItem('role') || null);
    const [authenticated, setAuthenticated] = useState(() => localStorage.getItem('authenticated') === 'true');

    const login = (newRole) => {
        if (newRole === 'guest' || !newRole) {
            setRole(null);
            setAuthenticated(false);
            localStorage.removeItem('role');
            localStorage.removeItem('authenticated');
        } else {
            setRole(newRole);
            setAuthenticated(true);
            localStorage.setItem('role', newRole);
            localStorage.setItem('authenticated', 'true');
        }
    };

    const logout = () => {
        setRole(null);
        setAuthenticated(false);
        localStorage.removeItem('role');
        localStorage.removeItem('authenticated');
    };

    return (
        <UserContext.Provider value={{ role, authenticated, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextProvider;