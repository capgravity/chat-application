import React, { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser}= useAuthContext();

    const signup = async ({
        fullname,
        username,
        password,
        confirmedPassword,
        gender
    }) => {
        const success = handleInputErrors({
            fullname,
            username,
            password,
            confirmedPassword,
            gender
        })
        if (!success) return;
        setLoading(true);
        try {

            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullname,
                    username,
                    password,
                    confirmedPassword,
                    gender
                })
            })
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            //local storage
            localStorage.setItem("chat-user",JSON.stringify(data)); //syntax is localStorage.setItem(key, value);
            //context
            setAuthUser(data);
            

        } catch (error) {

            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    };
    return { loading, signup }
};

export default useSignup


function handleInputErrors({fullname,username,password,confirmedPassword,gender}){
    if(!fullname||!username||!password||!confirmedPassword||!gender){
        toast.error('Please fill all the fields')
        return false
    }

    if(password!=confirmedPassword){
        toast.error('Passwords do not match')
        return false;
    }
    
    if(password.length<6){
        toast.error('Password Length should be more than 6')
        return false;
    }
    return true;
}