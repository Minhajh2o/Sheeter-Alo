import { createContext, useContext, useEffect, useState } from 'react';
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../config/firebase.config';

const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rememberedEmail, setRememberedEmail] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = ({ name, email, photoURL, password }) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user: createdUser }) => {
        await updateProfile(createdUser, {
          displayName: name,
          photoURL,
        });
        setUser({ ...createdUser, displayName: name, photoURL });
        return createdUser;
      })
      .finally(() => setLoading(false));
  };

  const login = ({ email, password }) => {
    setRememberedEmail(email);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() => setLoading(false));
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email || rememberedEmail);

  const updateUser = ({ name, photoURL }) => {
    if (!auth.currentUser) return Promise.reject(new Error('No user logged in'));
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name || auth.currentUser.displayName,
      photoURL: photoURL || auth.currentUser.photoURL,
    })
      .then(() => setUser({ ...auth.currentUser }))
      .finally(() => setLoading(false));
  };

  const setAuthPersistence = (rememberMe) =>
    setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

  const authInfo = {
    user,
    loading,
    register,
    login,
    logout,
    googleLogin,
    resetPassword,
    updateUser,
    rememberedEmail,
    setAuthPersistence,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
