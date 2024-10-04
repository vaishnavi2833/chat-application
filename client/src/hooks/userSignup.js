import toast from "react-hot-toast";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const userSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputError({ fullName, username, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    
    try {
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });
      if (!res.ok) {
        const errorData = await res.json(); 
        throw new Error(errorData.error || 'Signup failed'); 
      }
      const data = await res.json(); 
      if(data.error){
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data)
      console.log('Success:', data);
      toast.success("Signup successful!");

    } catch (err) {
      console.error('Error:', err.message);
      toast.error(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default userSignup;

function handleInputError({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Fill all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password length must be greater than 6 characters");
    return false;
  }
  return true;
}
