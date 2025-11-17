/* eslint-disable react-refresh/only-export-components */
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

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rememberedEmail, setRememberedEmail] = useState('');

  // Listen for user changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await currentUser.reload();
        setUser(auth.currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Register new user
  const register = async ({ name, email, photoURL, password }) => {
    setLoading(true);

    try {
      const { user: createdUser } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update profile if name/photo provided
      if (name || photoURL) {
        await updateProfile(createdUser, {
          displayName: name || null,
          photoURL: photoURL || null,
        });
      }

      // Refresh user instance from Firebase
      await createdUser.reload();
      setUser(auth.currentUser);

      return auth.currentUser;
    } catch (error) {
      setLoading(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    setRememberedEmail(email);
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await result.user.reload();
      setUser(auth.currentUser);
      return result.user;
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const googleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await result.user.reload();
      setUser(auth.currentUser);
      return auth.currentUser;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Reset password
  const resetPassword = (email) =>
    sendPasswordResetEmail(auth, email || rememberedEmail);

  // Update user profile (name/photo)
  const updateUser = async ({ name, photoURL }) => {
    if (!auth.currentUser)
      throw new Error('No user logged in');

    setLoading(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName: name ?? auth.currentUser.displayName,
        photoURL: photoURL ?? auth.currentUser.photoURL,
      });

      await auth.currentUser.reload();
      setUser(auth.currentUser);
    } finally {
      setLoading(false);
    }
  };

  // Set "Remember me" persistence
  const setAuthPersistence = (rememberMe) =>
    setPersistence(
      auth,
      rememberMe ? browserLocalPersistence : browserSessionPersistence
    );

  // Context value
  const authInfo = {
    user,
    loading,
    rememberedEmail,
    register,
    login,
    logout,
    googleLogin,
    resetPassword,
    updateUser,
    setAuthPersistence,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
