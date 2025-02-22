import axios from "axios";
import { useEffect,useState } from "react";

interface Review{
  id:string
  comment:string
}
const ReviewSection=({propertyId}:{propertyId:string}) => {
  const[reviews,setReviews]=useState<Review[]>([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    const fetchReviews=async()=>{
      try{
        const response=await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data)
      } catch(error){
        console.error("Error fetching reviews:",error);
      } finally{
        setLoading(false)
      }
     
    }
    fetchReviews();
  },[propertyId])
  if(loading){
    return <p>Loading reviews...</p>
  }
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review:Review) => (
        <div key={review.id} className="border-b pb-4 mb-4">
          <div className="flex items-center">
          <p className="font-bold">{review.comment}</p>
            
          </div>
         
        </div>
      ))}
    </div>
  );
};
export default ReviewSection;
