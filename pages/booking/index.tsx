import axios from "axios";

import { useState } from "react";
export default function BookingForm(){
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        cardNumber:"",
        expirationDate:"",
        cvv:"",
        billingAddress:"",
    })
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)
const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setLoading(true)
    setError(null);
    try{
        const response=await axios.post("/api/bookings",formData);
        setFormData(response.data)
       alert("Booking Confirmed")
    } catch (error) {
        console.error("Error response",error)
    } finally{
        setLoading(false)
    }
};
    return(
        <form onSubmit={handleSubmit}>
            <button type="submit" disabled={loading}>
                {loading ? "Processing" : "Confirm Payment"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
        
    )
}
