import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => { 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [logoutSuccess, setLogoutSuccess] = useState(false);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubAuthProvider);
    }

    const logOut = () => {
        setLogoutSuccess(true);
        return signOut(auth);
    }

    // observe the auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        loginSuccess,
        setLoginSuccess,
        
        logoutSuccess, 
        setLogoutSuccess,
        
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProviders;