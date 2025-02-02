import { BookingForm } from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { CancellationPolicy } from "@/components/booking/BookingForm";
const Booking:React.FC=()=>{
    const bookingDetails = {
        propertyName: "Sample Property",
        startDate: new Date().getTime(),
        totalNights: 5,
        bookingFee: 100,
        price: 500
    };

    return(
        <div className="min-h-screen flex  w-fullflex-col ">
            <BookingForm/>
            <OrderSummary bookingDetails={bookingDetails}/>
            <CancellationPolicy/>
        </div>
    )
}
export default Booking