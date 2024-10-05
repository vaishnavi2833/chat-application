import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const userLogin = () =>{
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()
    
    const login = async(username,password) =>{
        const success = handleInputError(username,password);
        if(!success) return 
        setLoading(true)
        try{
            const res = await fetch("http://localhost:8000/api/auth/login",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({ username, password }),
            })
            // console.log()
            const data = awaitres.json();
            console.log(data)
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)
            console.log('Success:', data);
            toast.success("Login successful!");

        }catch(err){
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    
    }
    return {loading,login}
}
export default userLogin

function handleInputError(username,password ) {
    if (!username || !password ) {
      toast.error("Fill all the fields");
      return false;
    }
    return true;
}