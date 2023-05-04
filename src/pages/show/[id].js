import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ShowSummary from "../../components/ShowSummary";
import Navbar from "../../components/Navbar";

const Show = () => {
  const router = useRouter();
  const { id } = router.query;
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        setError(error);
      }
    };

    if (id) {
      fetchShow();
    }
  }, [id]);

  const handleBooking = (bookingDetails) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!show) return (
    <div
      class="w-1/3 h-1/3 rounded-full animate-spin
                    border border-solid border-yellow-500 border-t-transparent"
    ></div>
  );

  return (
    <div >
      
      <ShowSummary show={show} handleBooking={handleBooking} />
      
    </div>
  );
};

export default Show;
