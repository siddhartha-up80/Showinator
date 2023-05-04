import React from "react";
import ShowCard from "../components/ShowCard";
import Navbar from "@/components/Navbar";

const Showinator = ({ shows }) => {
    
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-wrap justify-center">
        {shows ? (
          shows.map((show) => (
            <div className="m-4" key={show.id}>
              <ShowCard show={show} />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Showinator;

export async function getStaticProps() {
  const res = await fetch("https://api.tvmaze.com/shows");
  const shows = await res.json();

  return {
    props: {
      shows,
    },
  };
}
