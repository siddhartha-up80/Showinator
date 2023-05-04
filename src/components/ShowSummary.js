import { useState } from 'react';
import Navbar from "./Navbar";

const ShowSummary = ({ show }) => {
  const [bookingForm, setBookingForm] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    showId: show.id,
  });

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };
  

const handleSubmit = (e) => {
  e.preventDefault();
  if (typeof window !== "undefined") {
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
  }
  setBookingForm(false);
};
  return (
    <>
      <Navbar></Navbar>
      <div className='flex justify-center items-center'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img className="w-full" src={show.image.medium} alt={show.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{show.name}</div>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            {!bookingForm ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => setBookingForm(true)}
              >
                Book Tickets
              </button>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={bookingDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4"
                    type="submit"
                  >
                    Confirm Booking
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => setBookingForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSummary;
