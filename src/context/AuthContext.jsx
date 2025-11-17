import { useContext } from 'react';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export { AuthContext };

export default AuthProvider;
