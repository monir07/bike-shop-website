import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
// import { useHistory } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    // SIGN IN USING GOOGLE START FROM HERE----------------
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
    }
    // SIGN IN USING GOOGLE START FROM HERE----------------


    // SIGN IN USING EMAIL AND PASSWORD --------------------
    const signInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // SIGN IN USING EMAIL AND PASSWORD --------------------


    // REGISTRATION FUNCTION START FROM HERE --------------------
    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // REGISTRATION FUNCTION END FROM HERE --------------------


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInUsingEmail,
        registerNewUser,
    }
}

export default useFirebase;