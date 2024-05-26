

import React from 'react';

const StoriesPage = () => {
  const stories = [
    {
      id: 1,
      
      image: "s1.png",
    },
    {
      id: 2,
      
      image: "s2.png",
    },
    {
      id: 3,
      
      image: "s3.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="text-center flex felx-col mb-8">
        <h1 className="text-3xl   font-bold"> Uncover The Latest Trends And Stories</h1>
        <p className="mt-4 text-gray-600">Stay informed and updated with latest trends and home imprvoments ideas from our users.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative h-[500px] md:h-[500px] bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${story.image})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
              <h2 className="text-white text-lg font-semibold">{story.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
