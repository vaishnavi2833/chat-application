import toast from "react-hot-toast";
import React, { useState } from "react";

const userSignup = () => {
    const [loading,setLoading]=useState(false)

    const signup = async({fullName,username,password,confirmPassword,gender}) =>{
        const success=handleInputError({fullName,username,password,confirmPassword,gender})
        if(!success) return;
        setLoading(true);
        try{
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            })

            const data=await res.json();
            console.log(data)

        }catch(err){
            toast.error(err.message)
        }finally{
            setLoading(false)
        }

    }
    return {signup,loading}
}



export default userSignup

function handleInputError({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Fill all the fields")
        return false
    }
    if(password!=confirmPassword){
        toast.error("Passwords do not match")
        return false
    }
    if(password.length<6){
        toast.error("Password length must be greater than 6 characters")
        return false
    }
    return true
}