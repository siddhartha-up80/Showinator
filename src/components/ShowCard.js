import Link from "next/link";
import { useRouter } from "next/router";
import ShowSummary from "./ShowSummary";


const ShowCard = ({ show }) => {
  const router = useRouter();
  const { pathname, query } = router;

  // If the URL pathname matches the /show/:id path, show the summary
  const isSummaryVisible = pathname === "/show/[id]" && query.id === show.id;

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={show.image.medium} alt={show.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{show.name}</div>
          <div
            dangerouslySetInnerHTML={{ __html: show.summary.slice(0, 100) }}
          />

         
            <Link
              href={`/show/${show.id}`}
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              View Summary
            </Link>
          
        </div>
      </div>
      {isSummaryVisible && <ShowSummary show={show} />}
    </>
  );
};

export default ShowCard;
