import { testimonialData } from "./testimonialData";

export function TestimonialCard({showAll}) {

  const visibleReviews = showAll
    ? testimonialData : testimonialData.slice(0, 3);


  return (
    <>
      {visibleReviews.map((review, index) => (
        <div
          key={index}
          className="max-w-md p-6 bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 border border-stone-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl"
        >
          <h3 className="text-xl font-semibold text-gray-700 pb-4">
            {review.name}
          </h3>
          <p className="text-gray-600 leading-relaxed">{review.description}</p>
          <p className="text-sm text-gray-400 pt-4">{review.relation}</p>
        </div>
      ))}
    </>
  );
}
