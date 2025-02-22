
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

import axios from "axios";
import {  useEffect, useState } from "react";

export default function PropertyDetailPage() {
  const[loading,setLoading]=useState(true)
  const[property,setProperty]=useState(null)
  const router = useRouter();
  const { id } = router.query;
  useEffect(()=>{
    const fetchProperty=async()=>{
      if(!id) return;
      try{
        const response=await axios.get(`/api/properties/${id}`)
        setProperty(response.data)
      } catch(error){
        console.error("Error Fetching property details",error)
      } finally{
        setLoading(false)
      }
    }
    fetchProperty()
  },[id])
  if(loading) {
    return <p>Loading....</p>
  }
  if(!property){
    return <p>Property Not found</p>
  }
  return (
    <div>
      <PropertyDetail property={property} />
  
    </div>
  );
}
