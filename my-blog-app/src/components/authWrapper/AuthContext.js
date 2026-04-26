import {createContext, useContext} from 'react'

const AuthContext = createContext();

export const useUsername = () => {
    const { user } = useContext(AuthContext);
    return user ? user.username : null;
}

export const useAuth = () => useCpntext(AuthContext);

export default AuthContext;