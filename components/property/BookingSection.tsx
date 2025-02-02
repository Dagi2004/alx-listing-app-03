const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="font-semibold text-xl">{price}</h3>
      <div className="mt-4">
        <label className="font-bold">Check in</label>
        <input type="date" name="date" id="date" placeholder="DD/MM/YY" />
      </div>
      <div className="mt-4">
        <label className="font-bold">Check Out</label>
        <input type="date" name="date" id="date" placeholder="DD/MM/YY" />
      </div>
      <div className="mt-4">
        <p>
          Total Payyment:<strong>{price * 7}</strong>
        </p>
      </div>

      <button className="mt-4 bg-green-500 text-white rounde-md py-2 px-4">
        Resereve Now
      </button>
    </div>
  );
};
export default BookingSection;
