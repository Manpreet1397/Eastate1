

import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      quote: "This is an amazing product! It has changed my life completely.",
      photo: "EDWIN.png", 
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      quote: "Excellent service and fantastic support. Highly recommend!",
      photo: "EDWIN.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Samuel Green",
      quote: "Great value for money. I would definitely purchase again.",
      photo: "EDWIN.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Lisa Brown",
      quote: "The best experience I've ever had. Five stars!",
      photo: "EDWIN.png",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Don't Trust Us, Trust Their Voice</h1>
        <p className="mt-4 text-gray-800"> . Discover the heratfelt stories of clients. Hear what our satisfied customers have to say about us.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-slate-100 p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-800 text-center">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 font-semibold">{testimonial.name}</p>
              <div className="flex justify-center items-center mt-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.287 3.966a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.368 2.447c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.646 9.393c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
